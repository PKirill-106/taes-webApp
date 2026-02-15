'use client'
import {
	motionContainer,
	motionItem,
} from '@/components/ui/IntersectionWrapper'
import Section from '@/components/ui/Section'
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from 'motion/react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'

function Counter({ value }: { value: string }) {
	const numericValue = parseInt(value.replace(/\D/g, '')) || 0
	const suffix = value.replace(/[0-9]/g, '')

	const count = useMotionValue(0)
	const rounded = useTransform(count, latest => Math.round(latest))

	const ref = useRef<HTMLSpanElement>(null)
	const isInView = useInView(ref, { once: true, amount: 0.5 })

	useEffect(() => {
		const unsubscribe = rounded.on('change', latest => {
			if (ref.current) {
				ref.current.textContent = latest.toString()
			}
		})

		if (isInView) {
			const controls = animate(count, numericValue, {
				duration: 2.5,
				ease: 'easeInOut',
			})
			return () => {
				controls.stop()
				unsubscribe()
			}
		}

		return () => unsubscribe()
	}, [numericValue, count, rounded, isInView])

	return (
		<span>
			<span ref={ref}>0</span>
			{suffix}
		</span>
	)
}

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
			<motion.div
				variants={motionContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='flex flex-col md:flex-row text-center md:text-start md:items-baseline justify-between gap-8 md:gap-4'
			>
				{stats.map((item, index) => {
					const displayValue =
						index === 0 ? yearsOfExperience.toString() : item.number

					return (
						<motion.div
							key={index}
							variants={motionItem}
							className='flex items-center md:items-baseline flex-col gap-3 md:gap-0 w-full md:max-w-65'
						>
							<span className='text-6xl md:text-4xl lg:text-6xl font-bold text-primary max-w-50 w-full md:w-auto md:max-w-auto'>
								<Counter value={displayValue} />
							</span>
							<div className='flex flex-col justify-center'>
								<span className='text-xl md:text-2xl font-bold'>
									{item.title}
								</span>
								<span className='text-base font-light'>
									{item.descriptioin}
								</span>
							</div>
						</motion.div>
					)
				})}
			</motion.div>
		</Section>
	)
}
