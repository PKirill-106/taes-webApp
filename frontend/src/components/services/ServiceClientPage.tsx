'use client'
import MainServices from '@/components/services/MainServices'
import ServiceSection from '@/components/services/ServiceSection'
import { ServiceSkeleton } from '@/components/services/ServiceSkeletons'
import Map from '@/components/ui/Map'
import Partners from '@/components/ui/Partners'
import Section from '@/components/ui/Section'
import { useGetServiceQuery } from '@/state/service/serviceApiSlice'
import { useLocale } from 'next-intl'
import { use } from 'react'

export default function ServiceClientPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = use(params)

	const locale = useLocale()
	const {
		data: service,
		isLoading,
		isError,
	} = useGetServiceQuery({ slug, locale })

	const mapSrc =
		'https://www.google.com/maps/d/embed?mid=1-Yl4H6u6ml_4D0aALfPs1qJ-CHBAbzY&ehbc=2E312F'

	if (isError || !service) return <div>Service not found</div>

	return (
		<>
			{isLoading ? (
				<Section>
					<ServiceSkeleton />
				</Section>
			) : (
				<>
					<MainServices service={service} />

					{service.Sections.map(sec => (
						<ServiceSection key={sec.title} section={sec} />
					))}
				</>
			)}

			{service.Slug == 'collateral-asset-monitoring' && (
				<Section>
					<Map className='aspect-square md:aspect-video' mapSrc={mapSrc} />
				</Section>
			)}
			<Section>
				<Partners />
			</Section>
		</>
	)
}
