import ServiceClientPage from '@/components/services/ServiceClientPage'
import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IService, ResponseType } from '@/types/interfaceApi'
import { Metadata } from 'next'

type Props = {
	params: Promise<{ slug: string; locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug, locale } = await params

	const result = await apiWrapper(async () => {
		const res: ResponseType<IService[]> = await api.get(
			`/services?filters[Slug][$eq]=${slug}&populate[Image][fields][0]=url${locale === 'en' ? '&locale=en' : ''}`,
		)
		return res.data.data[0]
	})

	if ('error' in result || !result.data) {
		return { title: 'Послуга не знайдена' }
	}

	const service = result.data

	const description =
		service.Description?.[0]?.children?.[0]?.text ||
		'Детальніше про послугу на сайті TAES'

	return {
		title: `${service.Title}`,
		description,
		openGraph: {
			title: `${service.Title}`,
			description,
			url: `https://taes.com.ua/${locale}/services/${slug}`,
		},
	}
}

export default function ServicePage({ params }: Props) {
	return (
		<>
			<ServiceClientPage params={params} />
		</>
	)
}
