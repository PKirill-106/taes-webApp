'use client'
import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Section from '../ui/Section'
import { Skeleton } from '../ui/skeleton'

export default function AboutInfo() {
	const locale = useLocale()
	const { data, isLoading, isError } = useGetCompanyDataQuery(locale)

	const t = useTranslations('AboutUsPage')

	if (isError || !data) return null

	const renderChildren = (children: any[]) => {
		return children.map((child, idx) => {
			if (child.bold) {
				return <strong key={idx}>{child.text}</strong>
			}
			return <span key={idx}>{child.text}</span>
		})
	}

	return (
		<Section className='flex flex-col gap-3 md:gap-6 lg:gap-10'>
			<h3 className='text-center'>{t('title')}</h3>

			<div className='flex flex-col md:flex-row gap-3 md:gap-6'>
				{isLoading ? (
					<>
						<Skeleton className='flex-4 w-1/3' />
						<div className='flex-6 space-y-6 gap-6'>
							<Skeleton className='h-10 w-1/3' />
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-4 w-2/3' />
							<Skeleton className='h-4 w-2/3' />
							<Skeleton className='h-4 w-1/3' />
							<Skeleton className='h-4 w-1/3' />
							<Skeleton className='h-4 w-1/3' />
							<Skeleton className='h-4 w-full' />
						</div>
					</>
				) : (
					<>
						<div className='flex-4'>
							<div className='sticky top-22 aspect-video md:aspect-square'>
								<Image
									src='/about_us/about_us_main.svg'
									alt='about us image'
									fill
									className='object-contain'
								/>
							</div>
						</div>
						<div className='flex-6 space-y-6 text-heading leading-relaxed'>
							{data.Description.map((block, index) => {
								switch (block.type) {
									case 'paragraph':
										return (
											<p key={index} className='lead-p'>
												{renderChildren(block.children)}
											</p>
										)

									case 'list':
										return (
											<ul key={index} className='space-y-2'>
												{block.children.map((item: any, itemIdx: number) => (
													<li key={itemIdx} className='flex items-center gap-2'>
														<strong className='text-primary'>—</strong>
														<span className='lead-p'>
															{renderChildren(item.children)}
														</span>
													</li>
												))}
											</ul>
										)

									default:
										return null
								}
							})}
						</div>
					</>
				)}
			</div>
		</Section>
	)
}
