'use client'

import MainServices from '@/components/services/MainServices'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetServicesQuery } from '@/state/service/serviceApiSlice'
import { useLocale } from 'next-intl'

export default function ServicesPage() {
	const locale = useLocale()
	const { data: services, isLoading, isError } = useGetServicesQuery(locale)

	if (isLoading) return <Skeleton className='h-screen w-full' />
	if (isError || !services) return <div>Service not found</div>

	return (
		<>
			{services.map(service => (
				<MainServices
					key={service.documentId}
					service={service}
					showButton={true}
				/>
			))}
		</>
	)
}
