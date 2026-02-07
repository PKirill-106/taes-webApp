'use client'

import { ILogo } from '@/types/interfacesProps'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MyTooltip from '../ui/MyTooltip'

export default function Logo(props: ILogo) {
	const pathname = usePathname()

	const logoContent = (
		<div
			className={`${
				pathname === '/' ? '' : 'hover:scale-105 duration-300 transition-all'
			}`}
		>
			<Image
				src={props.type === 'main' ? '/logo/logo.svg' : '/logo/small-logo.svg'}
				alt='beauty house logo'
				width={props.width}
				height={props.height}
				className='md:hidden'
			/>
		</div>
	)

	if (pathname !== '/')
		return (
			<MyTooltip
				element={<Link href='/'>{logoContent}</Link>}
				tip='На Головну'
			/>
		)

	return logoContent
}
