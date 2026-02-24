'use client'
import { useGetPartnersQuery } from '@/state/partners/partnerApiSlice'
import { IPartners } from '@/types/interfacesProps'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from './skeleton'

export default function Partners(props: IPartners) {
	const locale = useLocale()
	const { data: partners, isLoading, isError } = useGetPartnersQuery(locale)

	if ((!partners && !isLoading && !isError) || partners == undefined) {
		return
	} else if (isError) {
		return
	}

	const filteredPartners = props.enum
		? [...partners].filter(p => p.Display_Location?.includes(props.enum!))
		: [...partners].filter(p => !p.Display_Location?.includes('none'))

	return (
		<ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center w-full gap-6'>
			{isLoading ? (
				[...Array(5)].map((_, index) => (
					<Skeleton key={index} className='w-full h-20' />
				))
			) : (
				<>
					{filteredPartners
						.toSorted((a, b) => a.Order - b.Order)
						.map(partner => {
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
								<li
									key={partner.documentId}
									className={`relative w-full h-20 ${partner.Link && 'hover:scale-110 active:scale-110 duration-200'}`}
								>
									{partner.Link ? (
										<Link href={partner.Link} target='_blank'>
											{PartnerImage}
										</Link>
									) : (
										PartnerImage
									)}
								</li>
							)
						})}
				</>
			)}
		</ul>
	)
}
