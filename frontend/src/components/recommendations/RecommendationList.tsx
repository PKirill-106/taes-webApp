'use client'

import { useGetRecommendationsQuery } from '@/state/recommendations/recommendationApiSlice'
import { useLocale } from 'next-intl'
import 'swiper/css'
import RecommendationItem from './RecommendationItem'
import RecommendationSkelet from './RecommendationSkelet'

export default function RecommendationList() {
	const locale = useLocale()
	const {
		data: recommendations,
		isLoading,
		isError,
	} = useGetRecommendationsQuery(locale)

	if (isLoading) {
		return (
			<div className='flex'>
				<RecommendationSkelet />
				<RecommendationSkelet />
			</div>
		)
	}

	if (!recommendations || isError) return null

	const list = recommendations.slice(0, 2)

	return (
		<div className='flex flex-col md:grid grid-cols-2 gap-6'>
			{list.map((r, index) => (
				<RecommendationItem key={r.documentId} r={r} id={index} />
			))}
		</div>
	)
}
