import ServicesClientPage from '@/components/services/ServicesClientPage'
import { buildMetadata } from '@/lib/seo/buildMetadata'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
	params,
}: {
	params: { locale: string }
}): Promise<Metadata> {
	const { locale } = params

	const t = await getTranslations({
		locale,
		namespace: 'Services',
	})

	return buildMetadata({
		title: t('title'),
		description: t('description'),
		locale,
		path: '/services',
	})
}

export default function ServicesPage() {
	return <ServicesClientPage />
}
