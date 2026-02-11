import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'

export default function AboutUsInNumbers() {
	const t = useTranslations('HomePage')

	const stats = t.raw('AboutUsInNumbers') as Array<{
		number: string
		title: string
		descriptioin: string
	}>

	const startYear = 2009
	const currentYear = new Date().getFullYear()
	const yearsOfExperience = currentYear - startYear

	return (
		<Section layoutStyle='bg-white'>
			<div className='flex flex-col md:flex-row text-center md:text-start md:items-baseline justify-between gap-8 md:gap-4'>
				{stats.map((item, index) => (
					<div
						key={index}
						className='flex items-center md:items-baseline flex-col gap-3 md:gap-0 w-full md:max-w-65'
					>
						<span className='text-6xl md:text-4xl lg:text-6xl font-bold text-primary max-w-50 w-full md:w-auto md:max-w-auto'>
							{index == 0 ? yearsOfExperience : item.number}
						</span>
						<div className='flex flex-col justify-center'>
							<span className='text-xl md:text-2xl font-bold'>
								{item.title}
							</span>
							<span className='text-base font-light'>{item.descriptioin}</span>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}
