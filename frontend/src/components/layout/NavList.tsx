'use client'
import Link from 'next/link'

export default function NavList() {
	const navlinkData = ['Home', 'About', 'Services', 'Contact']

	return (
		<ul className='hidden md:flex items-center justify-end gap-5 lg:gap-6'>
			{navlinkData.map(el => (
				<li key={el}>
					<Link href={`/${el}`}>
						<span>{el}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}
