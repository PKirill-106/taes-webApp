'use client'
import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.css'
import Section from '../ui/Section'
import { Skeleton } from '../ui/skeleton'
import CertButtons from './CertButtons'
import CertModal from './CertModal'

export default function CertificateList() {
	const locale = useLocale()
	const { data: company, isLoading, isError } = useGetCompanyDataQuery(locale)

	const t = useTranslations('AboutUsPage')

	const swiperRef = useRef<SwiperType | null>(null)

	const [modalImage, setModalImage] = useState<string | null>(null)

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	if (isError || !company?.Certificates) return null

	return (
		<>
			<Section
				layoutStyle='overflow-hidden'
				className='flex flex-col gap-3 md:gap-6'
			>
				<h4 className='w-full text-center'>{t('sectionTitle')}</h4>

				<div className='space-y-3!'>
					<div className='relative'>
						<Swiper
							modules={[Navigation]}
							spaceBetween={24}
							onSwiper={swiper => {
								swiperRef.current = swiper
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
							}}
							onSlideChange={swiper => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
							}}
							breakpoints={{
								320: { slidesPerView: 1.2 },
								640: { slidesPerView: 2.5 },
								1024: { slidesPerView: 3.5 },
							}}
							className='px-4'
						>
							{isLoading
								? [...Array(4)].map((_, id) => (
										<SwiperSlide key={id}>
											<Skeleton className='h-105 rounded-md' />
										</SwiperSlide>
									))
								: company.Certificates.map((cert, id) => (
										<SwiperSlide key={cert.documentId}>
											<div
												onClick={() =>
													setModalImage(
														`${process.env.NEXT_PUBLIC_BACKEND_URL}${cert.url}`,
													)
												}
												className='relative h-105 rounded-md cursor-pointer'
											>
												<Image
													src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cert.url}`}
													alt={`Certificate ${id + 1}`}
													fill
													className='object-contain'
													unoptimized
												/>
											</div>
										</SwiperSlide>
									))}
						</Swiper>
					</div>

					<CertButtons
						swiperRef={swiperRef}
						isBeginning={isBeginning}
						isEnd={isEnd}
					/>
				</div>
			</Section>

			<CertModal modalImage={modalImage} setModalImage={setModalImage} />
		</>
	)
}
