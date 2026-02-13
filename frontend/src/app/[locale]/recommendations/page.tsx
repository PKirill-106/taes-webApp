'use client'
import RecommendationItem from '@/components/recommendations/RecommendationItem'
import RecommendationSkelet from '@/components/recommendations/RecommendationSkelet'
import Section from '@/components/ui/Section'
import SwiperButtons from '@/components/ui/SwiperButtons'
import { useGetRecommendationsQuery } from '@/state/recommendations/recommendationApiSlice'
import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'usehooks-ts'

export default function RecommendationPage() {
	const isMobile = useMediaQuery('(max-width: 768px)')

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

	const itemsPerSlide = isMobile ? 2 : 4
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
				autoHeight={true}
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

			<SwiperButtons
				swiperRef={swiperRef}
				isBeginning={isBeginning}
				isEnd={isEnd}
			/>
		</Section>
	)
}
