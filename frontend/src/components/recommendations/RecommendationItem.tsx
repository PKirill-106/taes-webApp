'use client'

import { IRecommendationItem } from '@/types/interfacesProps'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'

export default function RecommendationItem({ r, id }: IRecommendationItem) {
	if (!r) return null

	const t = useTranslations('HomePage.Recommendations')

	const isEven = id % 2 === 0
	const letterUrl = r.Image?.url

	return (
		<div
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
}
