import { useTranslations } from 'next-intl'
import Section from '../ui/Section'
import Image from 'next/image'

export default function Benefits() {
	const t = useTranslations('HomePage')

	const benefits = t.raw('Benefits') as Array<{
		text: string
		iconLink: string
	}>

	return (
		<Section className='flex flex-col md:flex-row items-stretch justify-between gap-3 md:gap-4 lg:gap-6'>
			{benefits.map(benefit => (
				<div
					key={benefit.iconLink}
					className='flex-1 flex flex-col items-center gap-3 md:gap-4 lg:gap-6 p-5 bg-white rounded-lg shadow-lg'
				>
					<div className='relative w-15 aspect-square'>
						<Image
							src={`/benefits/${benefit.iconLink}.svg`}
							alt={`benefit image: ${benefit.iconLink}`}
							fill
							className='object-contain'
						/>
					</div>
					<p className='text-xl w-110 md:w-auto md:small-p text-center'>{benefit.text}</p>
				</div>
			))}
		</Section>
	)
}
