import { useTranslations } from 'next-intl'
import Section from '../ui/Section'
import RecommendationItem from '../ui/RecommendationItem'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Recommendation() {
	const t = useTranslations('HomePage.Recommendations')

	return (
		<Section
			layoutStyle='bg-white'
			className='flex flex-col items-center gap-15'
		>
			<h3>{t('title')}</h3>
			<div className='space-y-3 md:space-y-6'>
				<RecommendationItem />
				<Link
					href='/recommendations'
					className='flex items-center gap-2 w-full justify-end hover-active-text'
				>
					{t('linkText')}{' '}
					<ArrowUpRight className='size-4 stroke-2 group-hover: duration-200' />
				</Link>
			</div>
		</Section>
	)
}
