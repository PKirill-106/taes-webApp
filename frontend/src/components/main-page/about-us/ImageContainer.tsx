'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

export default function ImageContainer() {
	const getImageLink = (index: number) => {
		return `/about_us/about_us-${index + 1}.svg`
	}

	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'start start'],
	})

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])

	return (
		<div ref={containerRef} className='relative whitespace-nowrap'>
			<motion.div style={{ x }} className='flex gap-6 w-max'>
				{[...Array(4)].map((_, index) => (
					<div key={index} className='p-6 rounded-2xl shadow-lg bg-white'>
						<div className='relative w-40 md:w-56 lg:w-70 aspect-square'>
							<Image
								src={getImageLink(index)}
								alt={`about us image ${index + 1}`}
								fill
								className='object-contain'
							/>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	)
}
