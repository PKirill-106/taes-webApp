import ServiceClientPage from '@/components/services/ServiceClientPage'
import { buildMetadata } from '@/lib/seo/buildMetadata'
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
			`/services?filters[Slug][$eq]=${slug}&populate[Image][fields][0]=url${
				locale === 'en' ? '&locale=en' : ''
			}`,
		)
		return res.data.data[0]
	})

	if ('error' in result || !result.data) {
		return buildMetadata({
			title: locale === 'en' ? 'Service not found' : 'Послуга не знайдена',
			description: '',
			locale,
			path: `/services/${slug}`,
		})
	}

	const service = result.data

	const description =
		service.Description?.[0]?.children?.[0]?.text ||
		(locale === 'en'
			? 'Learn more about this service on TAES website.'
			: 'Детальніше про послугу на сайті TAES')

	const image = service.Image?.url
		? `${process.env.NEXT_PUBLIC_BACKEND_URL}${service.Image.url}`
		: undefined

	return buildMetadata({
		title: service.Title,
		description,
		locale,
		path: `/services/${slug}`,
		image,
	})
}

export default function ServicePage({ params }: Props) {
	return <ServiceClientPage params={params} />
}
