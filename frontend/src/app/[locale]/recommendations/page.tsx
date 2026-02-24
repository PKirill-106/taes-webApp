import RecommendationClientPage from '@/components/recommendations/RecommendationClientPage'
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { getTranslations } from 'next-intl/server';
import 'swiper/css'

type Props = {
	params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const { locale } = await params

	const t = await getTranslations({
		locale,
		namespace: 'Metadata.PartnersPage',
	})

	return buildMetadata({
		title: t('title'),
		description: t('description'),
		locale: locale,
		path: '/recommendations',
	})
}

export default function RecommendationPage() {
	return <RecommendationClientPage />
}
