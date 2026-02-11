import { ReactNode } from 'react'

export default function Section({
	children,
	className,
	bgColor
}: {
	children: ReactNode
	className?: string
	bgColor?: string
}) {
	return (
		<section className={bgColor}>
			<div className={`section-container ${className}`}>{children}</div>
		</section>
	)
}
