'use client'

import { useGetCompanyDataQuery } from '@/state/company/companyApiSlice'
import { ILogo } from '@/types/interfacesProps'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MyTooltip from '../ui/MyTooltip'
import { Skeleton } from './skeleton'

export default function Logo(props: ILogo) {
	const locale = useLocale()
	const { data, isLoading, isError } = useGetCompanyDataQuery(locale)

	const pathname = usePathname()

	if (isError) return

	const logoContent = isLoading ? (
		<Skeleton
			className={`w-30 h-10 ${props.type === 'white' && 'bg-neutral-400'}`}
		/>
	) : (
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
