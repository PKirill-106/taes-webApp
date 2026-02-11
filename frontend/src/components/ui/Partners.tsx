'use client'
import { useGetPartnersQuery } from '@/state/partners/partnerApiSlice'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Skeleton } from './skeleton'

export default function Partners() {
	const locale = useLocale()
	const { data: partners, isLoading, isError } = useGetPartnersQuery(locale)

	if ((!partners && !isLoading && !isError) || partners == undefined) {
		return
	} else if (isError) {
		return
	}

	return (
		<ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center w-full gap-6'>
			{isLoading ? (
				[...Array(5)].map((_, index) => (
					<Skeleton key={index} className='w-full h-20' />
				))
			) : (
				<>
					{partners
						.toSorted((a, b) => a.Order - b.Order)
						.map(partner => (
							<li key={partner.documentId} className='relative w-full h-20'>
								<Image
									src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${partner.Logo.url}`}
									alt={`${partner.Name} logo`}
									fill
									className='object-contain'
                  unoptimized
								/>
							</li>
						))}
				</>
			)}
		</ul>
	)
}
