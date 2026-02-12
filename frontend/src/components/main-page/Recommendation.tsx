import { useTranslations } from 'next-intl'
import Section from '../ui/Section'
import RecommendationItem from '../ui/RecommendationItem'

export default function Recommendation() {
	const t = useTranslations('HomePage.Recommendations')

	return (
		<Section
			layoutStyle='bg-white'
			className='flex flex-col items-center gap-15'
		>
			<h3>{t('title')}</h3>
			<RecommendationItem />
		</Section>
	)
}
