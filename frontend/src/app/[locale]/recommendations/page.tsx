'use client'
import RecommendationItem from '@/components/recommendations/RecommendationItem'
import RecommendationSkelet from '@/components/recommendations/RecommendationSkelet'
import Section from '@/components/ui/Section'
import { useGetRecommendationsQuery } from '@/state/recommendations/recommendationApiSlice'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function RecommendationPage() {
	const t = useTranslations('HomePage.Recommendations')
	const locale = useLocale()
	const { data: recommendations, isLoading } =
		useGetRecommendationsQuery(locale)

	const swiperRef = useRef<SwiperType | null>(null)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	if (isLoading) {
		return (
			<Section className='flex'>
				<RecommendationSkelet />
				<RecommendationSkelet />
			</Section>
		)
	}

	if (!recommendations || recommendations.length === 0) {
		return null
	}

	const itemsPerSlide = 4
	const slides = []
	for (let i = 0; i < recommendations.length; i += itemsPerSlide) {
		slides.push(recommendations.slice(i, i + itemsPerSlide))
	}

	return (
		<Section className='space-y-8 overflow-hidden'>
			<h3 className='text-center'>
				{t.rich('title', {
					primary: chunks => <span className='text-primary'>{chunks}</span>,
				})}
			</h3>

			<Swiper
				spaceBetween={24}
				slidesPerView={1}
				onSwiper={swiper => {
					swiperRef.current = swiper
					setIsBeginning(swiper.isBeginning)
					setIsEnd(swiper.isEnd)
				}}
				onSlideChange={swiper => {
					setIsBeginning(swiper.isBeginning)
					setIsEnd(swiper.isEnd)
				}}
				className='className="w-full overflow-hidden'
			>
				{slides.map((group, slideIndex) => (
					<SwiperSlide key={slideIndex}>
						<div className='grid md:grid-cols-2 gap-6'>
							{group.map((r, index) => (
								<RecommendationItem
									key={r.documentId}
									r={r}
									id={slideIndex * itemsPerSlide + index}
								/>
							))}
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='flex justify-end gap-4'>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					disabled={isBeginning}
					className='h-12 w-12 rounded-full border flex items-center justify-center disabled:opacity-40'
				>
					<ChevronLeft />
				</button>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					disabled={isEnd}
					className='h-12 w-12 rounded-full border border-primary text-primary flex items-center justify-center disabled:opacity-40'
				>
					<ChevronRight />
				</button>
			</div>
		</Section>
	)
}
