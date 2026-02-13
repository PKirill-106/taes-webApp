'use client'
import MainServices from '@/components/services/MainServices'
import ServiceSection from '@/components/services/ServiceSection'
import { ServiceSkeleton } from '@/components/services/ServiceSkeletons'
import Map from '@/components/ui/Map'
import Partners from '@/components/ui/Partners'
import Section from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetServiceQuery } from '@/state/service/serviceApiSlice'
import { useLocale } from 'next-intl'
import { use } from 'react'

export default function ServicePage({
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

	console.log(service)

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
					<Map className='aspect-square md:aspect-video' />
				</Section>
			)}
			<Section>
				<Partners />
			</Section>
		</>
	)
}
