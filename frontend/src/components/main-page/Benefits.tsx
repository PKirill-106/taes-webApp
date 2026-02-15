'use client'
import { useTranslations } from 'next-intl'
import Section from '../ui/Section'
import Image from 'next/image'
import { motion } from 'motion/react'
import { motionContainer, motionItem } from '../ui/IntersectionWrapper'

export default function Benefits() {
	const t = useTranslations('HomePage')

	const benefits = t.raw('Benefits') as Array<{
		text: string
		iconLink: string
	}>

	return (
		<Section disableIntersection>
			<motion.div
				variants={motionContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-stretch justify-between gap-3 md:gap-4 lg:gap-6'
			>
				{benefits.map(benefit => (
					<motion.div
						key={benefit.iconLink}
						variants={motionItem}
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
						<span className='text-base font-light w-full max-w-110 md:w-auto text-center'>
							{benefit.text}
						</span>
					</motion.div>
				))}
			</motion.div>
		</Section>
	)
}
