'use client'

import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { ILogo } from '@/types/interfacesProps'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MyTooltip from '../ui/MyTooltip'

export default function Logo(props: ILogo) {
	const locale = useLocale()
	const { data, isLoading, isError } = useGetCompanyDataQuery(locale)

	const pathname = usePathname()

	if (isLoading || isError) return

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
						: `http://localhost:1337${data?.White_Logo.url}`
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
