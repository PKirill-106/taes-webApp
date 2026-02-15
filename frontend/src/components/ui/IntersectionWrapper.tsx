'use client'
import { motion } from 'motion/react'

export const motionContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
}

export const motionItem = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	show: { opacity: 1, y: 0, scale: 1 },
	transition: {
		type: 'spring',
		damping: 12,
		stiffness: 100,
		mass: 0.8,
		duration: 0.8,
	},
}

export const IntersectionWrapper = ({
	children,
}: {
	children: React.ReactNode
}) => (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true, amount: 0.4 }}
		transition={{ duration: 0.6, ease: 'easeIn' }}
	>
		{children}
	</motion.div>
)
