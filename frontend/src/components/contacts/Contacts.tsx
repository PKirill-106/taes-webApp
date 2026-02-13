'use client'

import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { useLocale, useTranslations } from 'next-intl'
import { Skeleton } from '../ui/skeleton'
import { clearAndFormatPhoneNumber } from '@/lib/utils/helpers'
import Link from 'next/link'

export default function Contacts() {
	const t = useTranslations('Contacts')

	const locale = useLocale()
	const { data: company, isLoading, isError } = useGetCompanyDataQuery(locale)

	const removeStart = locale === 'uk' ? true : false

	if (isError || !company) return null

	return (
		<div className='flex-2'>
			<div className='sticky top-22 space-y-6'>
				<h4>
					{t.rich('subTitle', {
						primary: chunks => <span className='text-primary'>{chunks}</span>,
					})}
				</h4>
				<div className='space-y-5'>
					{isLoading ? (
						[...Array(4)].map((_, id) => (
							<Skeleton
								key={id}
								className={`h-5 ${id == 0 ? 'w-20' : id == 3 ? 'w-60' : 'w-40'}`}
							/>
						))
					) : (
						<div className='space-y-5 font-light'>
							<p>
								<span className='font-bold'>{t('adress')}:</span>{' '}
								{company.Adress}
							</p>
							<h4 className='text-primary font-bold font-sans!'>
								<Link
									href={`tel:${company.Phone}`}
									className='hover-active-text'
								>
									{clearAndFormatPhoneNumber(company.Phone, removeStart)}
								</Link>
							</h4>
							<p>
								<span className='font-bold'>Email:</span>{' '}
								<Link
									href={`mailto:${company.Email}`}
									className='hover-active-text'
								>
									<span className='underline'>{company.Email}</span>
								</Link>
							</p>
							<p>
								<span className='font-bold'>{t('workingHours')}:</span>{' '}
								{company.WorkHours}{' '}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
