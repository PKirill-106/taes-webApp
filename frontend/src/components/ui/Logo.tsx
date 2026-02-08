'use client'

import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { ILogo } from '@/types/interfacesProps'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MyTooltip from '../ui/MyTooltip'

export default function Logo(props: ILogo) {
	const { data, isLoading, isError } = useGetCompanyDataQuery()

	const pathname = usePathname()

	if (isLoading || isError) return
	console.log(`${data?.Logo.url}`)
	const logoContent = (
		<div
			className={`${
				pathname === '/' ? '' : 'hover:scale-105 duration-300 transition-all'
			}`}
		>
			<Image
				src={
					props.type === 'main'
						? `http://localhost:1337${data?.Logo.url}`
						: `http://localhost:1337${data?.White_Logo}`
				}
				alt='TAES logo'
				width={props.width}
				height={props.height}
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
