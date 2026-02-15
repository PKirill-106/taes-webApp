'use client'
import { ReactNode } from 'react'
import { IntersectionWrapper } from './IntersectionWrapper'

export default function Section({
	children,
	className,
	layoutStyle,
	disableIntersection = false,
}: {
	children: ReactNode
	className?: string
	layoutStyle?: string
	disableIntersection?: boolean
}) {
	const child = (
		<div className={`section-container ${className}`}>{children}</div>
	)

	return (
		<section className={layoutStyle}>
			{disableIntersection ? (
				child
			) : (
				<IntersectionWrapper>{child}</IntersectionWrapper>
			)}
		</section>
	)
}
