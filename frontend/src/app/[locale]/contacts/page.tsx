import Contacts from '@/components/contacts/Contacts'
import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'
import Map from './Map'

export default function ContactsPage() {
	const t = useTranslations('Contacts')

	return (
		<Section className='space-y-8'>
			<h3 className='text-center'>{t('title')}</h3>
			<div className='flex flex-col md:flex-row justify-between gap-6'>
				<Contacts />
				<Map />
			</div>
		</Section>
	)
}
