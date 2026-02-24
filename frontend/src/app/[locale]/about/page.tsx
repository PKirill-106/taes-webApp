import AboutInfo from '@/components/about-page/AboutInfo'
import CertificateList from '@/components/about-page/CertificateList'
import { buildMetadata } from '@/lib/seo/buildMetadata'
import { getTranslations } from 'next-intl/server'

type Props = {
	params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const { locale } = await params

	const t = await getTranslations({ locale, namespace: 'Metadata.AboutPage' })

	return buildMetadata({
		title: t('title'),
		description: t('description'),
		locale: locale,
		path: '/about',
	})
}

export default function AboutUsPage() {
	return (
		<>
			<AboutInfo />
			<CertificateList />
		</>
	)
}
