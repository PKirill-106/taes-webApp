'use client'
import { useGetServicesQuery } from '@/state/service/serviceApiSlice'
import { INavServices } from '@/types/interfacesProps'
import { ChevronRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { Skeleton } from '../ui/skeleton'

export default function NavServices(props: INavServices) {
	const locale = useLocale()
	const { data: services, isLoading, isError } = useGetServicesQuery(locale)

	const t = useTranslations('Navbar')

	const [isOpen, setIsOpen] = useState<boolean>(false)

	if (isLoading) {
		return (
			<div className='grid gap-6'>
				<Skeleton className='h-60 rounded-2xl' />
				<Skeleton className='h-60 rounded-2xl' />
			</div>
		)
	}

	if (!services || isError) return null
	return (
		<div
			onMouseLeave={() => props.showLocaleSwitch && setIsOpen(false)}
			className='relative group'
		>
			<div
				onMouseEnter={() => props.showLocaleSwitch && setIsOpen(true)}
				className='flex justify-between items-center'
			>
				<Link
					href='/services'
					className={`w-full flex items-center md:gap-2 ${props.showLocaleSwitch ? 'hover-active-text' : 'footer-link'}`}
				>
					{t(`${props.itemKey}.name`)}
					{props.showLocaleSwitch && (
						<ChevronRight
							className={`hidden md:flex link-size transition-all duration-300 ease-out ${isOpen && 'rotate-90'}`}
						/>
					)}
				</Link>

				{props.showLocaleSwitch && (
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={`m-2 hover-active-text ${props.showLocaleSwitch ? 'md:hidden' : ''}`}
					>
						<ChevronRight
							className={`link-size transition-all duration-300 ease-out ${isOpen && 'rotate-90'}`}
						/>
					</button>
				)}
			</div>

			{isOpen && (
				<ul className='md:absolute md:left-0 flex items-center md:min-w-63 md:bg-white md:border md:border-light-border md:shadow-lg md:rounded-lg py-2 md:z-50'>
					{props.showLocaleSwitch && (
						<div className='w-px bg-transparent-text py-9 md:hidden' />
					)}
					<div className='block space-y-2'>
						{services.map(service => (
							<li key={service.documentId}>
								<Link
									href={`/services/${service.Slug}`}
									className='hover-active-text block px-4 py-2 text-sm text-heading hover:bg-secondary/20 rounded-md transition-colors'
								>
									{service.Title}
								</Link>
							</li>
						))}
					</div>
				</ul>
			)}
		</div>
	)
}
