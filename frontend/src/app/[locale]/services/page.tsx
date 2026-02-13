'use client'

import MainServices from '@/components/services/MainServices'
import { ServiceSkeleton } from '@/components/services/ServiceSkeletons'
import Section from '@/components/ui/Section'
import { useGetServicesQuery } from '@/state/service/serviceApiSlice'
import { useLocale } from 'next-intl'

export default function ServicesPage() {
	const locale = useLocale()
	const { data: services, isLoading, isError } = useGetServicesQuery(locale)

	if (isError || !services) return <div>Service not found</div>

	return (
		<>
			{isLoading ? (
				<Section>
					<ServiceSkeleton />
					<ServiceSkeleton />
				</Section>
			) : (
				services.map(service => (
					<MainServices
						key={service.documentId}
						service={service}
						showButton={true}
					/>
				))
			)}
		</>
	)
}
