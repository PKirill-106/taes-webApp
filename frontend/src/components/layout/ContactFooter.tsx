'use client'

import { clearAndFormatPhoneNumber } from '@/lib/utils/helpers'
import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { useLocale } from 'next-intl'
import { Skeleton } from '../ui/skeleton'

export default function ContactFooter() {
	const locale = useLocale()
	const { data: company, isLoading, isError } = useGetCompanyDataQuery(locale)

	if (isError || !company) {
		return null
	}

	const removeStart = locale === 'uk' ? true : false

	const footerContacts = [
		{
			href: `tel:${company.Phone}`,
			text: `${clearAndFormatPhoneNumber(company.Phone, removeStart)}`,
		},
		{
			href: `mailto:${company.Email}`,
			text: `${company.Email}`,
		},
	]

	return (
		<>
			<div className='flex flex-col gap-2'>
				{isLoading ? (
					[...Array(2)].map((_, id) => (
						<Skeleton key={id} className='w-full h-4 bg-neutral-400' />
					))
				) : (
					<>
						<span>{company.Adress}</span>
						<span>{company.WorkHours}</span>
					</>
				)}
			</div>
			<div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
				{isLoading
					? [...Array(2)].map((_, id) => (
							<Skeleton key={id} className='w-full h-8 rounded-full bg-neutral-400' />
						))
					: footerContacts.map(data => (
							<a key={data.href} href={data.href} className='flex-1'>
								<div className='flex items-center justify-center border rounded-full p-2 hover:bg-white/10 active:bg-white/10 hover:text-secondary active:text-secondary ease-out duration-300 transition-all cursor-pointer'>
									<span>{data.text}</span>
								</div>
							</a>
						))}
			</div>
		</>
	)
}
