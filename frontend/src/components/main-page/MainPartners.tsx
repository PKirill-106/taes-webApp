import { useTranslations } from 'next-intl'
import Section from '../ui/Section'
import Partners from '../ui/Partners'

export default function MainPartners() {
	const t = useTranslations('HomePage.Partners')

	return (
		<Section
			layoutStyle='bg-white'
			className='flex flex-col items-center gap-6'
		>
			<div className='flex flex-col items-center gap-4'>
				<h3 className='text-center'>{t('title')}</h3>
				<p className='lead-p text-center max-w-170'>{t('text')}</p>
			</div>
			<Partners />
		</Section>
	)
}
