import { ReactNode } from 'react'

export default function Section({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return <div className={`section-container ${className}`}>{children}</div>
}
