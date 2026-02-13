'use client'
import Section from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/skeleton'
import { renderPrivacyPolicy } from '@/lib/utils/helpers'
import { useGetPrivacyQuery } from '@/state/privacy/privacyApiSlice'
import { useLocale } from 'next-intl'

export default function PrivacyPolicyPage() {
	const locale = useLocale()
	const { data: privacy, isLoading, isError } = useGetPrivacyQuery(locale)

	if (isLoading) {
		return (
			<Section className='py-20'>
				<Skeleton className='h-10 w-1/3 mb-10 mx-auto' />
				<div className='space-y-4'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-3/4' />
				</div>
			</Section>
		)
	}

	if (isError || !privacy) return null

	return (
		<Section className='py-20 max-w-4xl mx-auto'>
			{renderPrivacyPolicy(privacy.privacy_policy)}
		</Section>
	)
}
