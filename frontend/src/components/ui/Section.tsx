import { ReactNode } from 'react'

export default function Section({
	children,
	className,
	layoutStyle
}: {
	children: ReactNode
	className?: string
	layoutStyle?: string
}) {
	return (
		<section className={layoutStyle}>
			<div className={`section-container ${className}`}>{children}</div>
		</section>
	)
}
