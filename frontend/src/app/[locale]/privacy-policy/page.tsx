import PrivacyPolicyClientPage from '@/components/privacy-policy/PrivacyPolicyClientPage'
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { getTranslations } from 'next-intl/server';

type Props = {
	params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props) {
	const { locale } = await params

	const t = await getTranslations({
		locale,
		namespace: 'Metadata.PrivacyPage',
	})

	return buildMetadata({
		title: t('title'),
		description: t('description'),
		locale: locale,
		path: '/contacts',
	})
}

export default function PrivacyPolicyPage() {
	return <PrivacyPolicyClientPage />
}
