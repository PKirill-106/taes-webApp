import { Button } from '@/components/ui/button'
import Section from '@/components/ui/Section'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ImageContainer from './ImageContainer'

export default function AboutUs() {
	const t = useTranslations('HomePage.AboutUs')

	const description = t('description').split('.')

	return (
		<Section
			layoutStyle='bg-white overflow-hidden'
			className='space-y-4 md:space-y-6 lg:space-y-8'
		>
			<p className='font-bold bg-secondary text-heading w-fit rounded-full px-2'>
				About us
			</p>
			<div className='flex flex-col md:flex-row gap-6'>
				<h2 className='flex-1 md:h-fit md:sticky md:top-0'>{t('title')}</h2>
				<div className='flex-2 space-y-6 md:space-y-4'>
					<div className='space-y-3 md:space-y-4'>
						{description.map(sentence => (
							<p key={sentence}>{sentence}.</p>
						))}
					</div>
					<Button variant='secondary' className='w-full md:w-fit'>
						<p>{t('buttonText')}</p>
						<div className='bg-heading rounded-full p-2'>
							<ArrowUpRight className='size-3 stroke-3 text-white group-hover: duration-200' />
						</div>
					</Button>
				</div>
			</div>
			<ImageContainer />
		</Section>
	)
}
