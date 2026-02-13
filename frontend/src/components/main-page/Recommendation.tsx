import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import RecommendationList from '../recommendations/RecommendationList'
import Section from '../ui/Section'

export default function Recommendation() {
	const t = useTranslations('HomePage.Recommendations')

	return (
		<Section
			layoutStyle='bg-white'
			className='flex flex-col items-center gap-15'
		>
			<h3>
				{t.rich('title', {
					primary: chunks => <span className='text-primary'>{chunks}</span>,
				})}
			</h3>
			<div className='w-full space-y-3 md:space-y-6'>
				<RecommendationList />
				<Link
					href='/recommendations'
					className='flex items-center gap-2 w-full justify-end hover-active-text'
				>
					{t('linkText')}{' '}
					<ArrowUpRight className='size-4 stroke-2 group-hover: duration-200' />
				</Link>
			</div>
		</Section>
	)
}
