'use client'
import { useGetPartnersQuery } from '@/state/partners/partnerApiSlice'
import { IDisplay_Location, IPartner } from '@/types/interfaceApi'
import { IPartners } from '@/types/interfacesProps'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css/bundle'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'

export default function Partners(props: IPartners) {
	const locale = useLocale()
	const { data: partners, isLoading, isError } = useGetPartnersQuery(locale)

	if ((!partners && !isLoading && !isError) || partners == undefined) {
		return
	} else if (isError) {
		return
	}

	const filteredPartners = partners.filter(p => {
		const locations = p.Display_Location

		if (!locations || locations.length === 0) return false

		const isStringArray = typeof locations[0] === 'string'

		if (props.enum) {
			if (isStringArray) {
				return (locations as string[]).includes(props.enum)
			} else {
				return (locations as IDisplay_Location[]).some(
					loc => loc.place === props.enum,
				)
			}
		} else {
			if (isStringArray) {
				return (locations as string[])?.some(loc => !loc.includes('none'))
			} else {
				return (locations as IDisplay_Location[])?.some(
					loc => loc.place !== 'none',
				)
			}
		}
	})

	const count = filteredPartners.length

	const PartnerItem = (partner: IPartner) => {
		let targetLink = partner.Link

		if (props.enum && partner.Display_Location) {
			const locations = partner.Display_Location

			if (Array.isArray(locations)) {
				const specificLoc = (locations as any[]).find(
					loc => loc && typeof loc === 'object' && loc.place === props.enum,
				)

				if (specificLoc?.link) {
					targetLink = specificLoc.link
				}
			}
		}

		const PartnerImage = (
			<Image
				src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${partner.Logo.url}`}
				alt={`${partner.Name} logo`}
				fill
				className='object-contain'
				unoptimized
			/>
		)

		return (
			<div
				className={`relative max-w-50 w-full h-20 ${partner.Link && 'hover:scale-110 active:scale-110 duration-200 cursor-pointer'}`}
			>
				{partner.Link ? (
					<Link
						href={
							props.enum && Array.isArray(partner.Display_Location)
								? (partner.Display_Location as any[]).find(
										loc => typeof loc === 'object' && loc.place === props.enum,
									)?.link || partner.Link
								: partner.Link
						}
						target='_blank'
					>
						{PartnerImage}
					</Link>
				) : (
					PartnerImage
				)}
			</div>
		)
	}

	const scrollPartners =
		count > 5 && count < 12
			? [...filteredPartners, ...filteredPartners, ...filteredPartners]
			: filteredPartners

	const First = (
		<div className='flex justify-center items-center gap-10 w-full'>
			{filteredPartners.map(p => (
				<div key={p.documentId} className='w-40'>
					{PartnerItem(p)}
				</div>
			))}
		</div>
	)

	const Second = (
		<ul className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-center w-full gap-8'>
			{filteredPartners.map(p => (
				<li key={p.documentId}>{PartnerItem(p)}</li>
			))}
		</ul>
	)

	const Third = (
		<>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={40}
				slidesPerView={'auto'}
				loop={true}
				speed={8000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					stopOnLastSlide: false,
					pauseOnMouseEnter: true,
				}}
				allowTouchMove={true}
				grabCursor={true}
				className='linear-swiper-partners'
			>
				{scrollPartners.map((p, id) => (
					<SwiperSlide key={id} style={{ width: '160px' }}>
						{PartnerItem(p)}
					</SwiperSlide>
				))}
			</Swiper>

			<style jsx global>{`
				.linear-swiper-partners .swiper-wrapper {
					transition-timing-function: linear !important;
				}import { IDisplay_Location } from '../../types/interfaceApi';

			`}</style>
		</>
	)

	return (
		<div className='w-full'>
			{count > 0 && count <= 3
				? First
				: count >= 4 && count <= 5
					? Second
					: Third}
		</div>
	)
}
