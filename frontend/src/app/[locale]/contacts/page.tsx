import Contacts from '@/components/contacts/Contacts'
import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'
import Map from '../../../components/ui/Map'

export default function ContactsPage() {
	const t = useTranslations('Contacts')

	const mapSrc =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569296.823282729!2d30.024842429501067!3d50.111713904957746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc217e5ec0b1%3A0x86a4bea3ce27b485!2z0KLQpiAi0JDRgNC60LDQtNC40Y8i!5e0!3m2!1sru!2spl!4v1771610939212!5m2!1sru!2spl'

	return (
		<Section className='space-y-8'>
			<h3 className='text-center'>{t('title')}</h3>
			<div className='flex flex-col md:flex-row justify-between gap-6'>
				<Contacts />
				<Map className='aspect-square' mapSrc={mapSrc} />
			</div>
		</Section>
	)
}
