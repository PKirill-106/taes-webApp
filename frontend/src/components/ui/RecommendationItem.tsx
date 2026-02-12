'use client'

import { useGetRecommendationsQuery } from '@/state/recommendations/recommendationApiSlice'
import { useLocale, useTranslations } from 'next-intl'
import { Skeleton } from './skeleton'
import Image from 'next/image'
import { Button } from './button'
import { ArrowUpRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog'

export default function RecommendationItem() {
	const locale = useLocale()
	const {
		data: recommendations,
		isLoading,
		isError,
	} = useGetRecommendationsQuery(locale)

	const t = useTranslations('HomePage.Recommendations')

	if (isLoading) {
		return (
			<div className='grid gap-6'>
				<Skeleton className='h-60 rounded-2xl' />
				<Skeleton className='h-60 rounded-2xl' />
			</div>
		)
	}

	if (!recommendations || isError) return null

	return (
		<div className='flex flex-col md:flex-row gap-6'>
			{recommendations.slice(0, 2).map((r, id) => {
				const isEven = id % 2 === 0
				const letterUrl = r.Image?.url

				return (
					<div
						key={r.documentId}
						className={`flex flex-col justify-between rounded-lg border space-y-6 p-4 transition-colors
              ${isEven ? 'bg-tertiary' : 'bg-light-grey'}
            `}
					>
						<div className='space-y-6'>
							<div className=''>
								<Image src='/quote.svg' alt='quote' width={60} height={60} />
							</div>

							<p className='small-p'>{r.Text}</p>
						</div>

						<div className='flex flex-col md:justify-end gap-6'>
							<div className='flex items-center gap-6'>
								<div className='relative w-24 h-24 rounded-full light-border flex items-center justify-center overflow-hidden'>
									<Image
										src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${r.Partner.Logo.url}`}
										alt={r.Partner.Name}
										fill
										className='object-contain p-4'
										unoptimized
									/>
								</div>

								<div>
									<h3 className='text-2xl font-semibold'>{r.Partner.Name}</h3>
									{r.Partner.Description && (
										<p className='text-muted-foreground mt-1'>
											{r.Partner.Description}
										</p>
									)}
								</div>
							</div>

							{letterUrl && (
								<Dialog>
									<DialogTrigger asChild>
										<Button variant='outline' className='w-full md:w-auto'>
											{t('buttonText')}
											<div className='bg-heading rounded-full p-2'>
												<ArrowUpRight className='size-3 stroke-3 text-white group-hover: duration-200' />
											</div>
										</Button>
									</DialogTrigger>
									<DialogContent className='md:max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none'>
										<DialogTitle className='sr-only'>
											Рекомендаційний лист {r.Partner.Name}
										</DialogTitle>
										<div className='relative w-full h-[80vh]'>
											<Image
												src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${letterUrl}`}
												alt={`Letter from ${r.Partner.Name}`}
												fill
												className='object-contain'
												quality={100}
												unoptimized
												loading='lazy'
											/>
										</div>
									</DialogContent>
								</Dialog>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}
