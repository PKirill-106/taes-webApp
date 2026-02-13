'use client'
import { IMainServices } from '@/types/interfacesProps'
import Section from '../ui/Section'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function MainServices(props: IMainServices) {
	const t = useTranslations('Services')

	const renderChildren = (children: any[]) => {
		return children.map((child, idx) => {
			if (child.bold) {
				return <strong key={idx}>{child.text}</strong>
			}
			return <span key={idx}>{child.text}</span>
		})
	}

	return (
		<Section className='space-y-8 md:space-y-14'>
			<h3 className='text-center'>{props.service.Title}</h3>

			<div className='flex flex-col-reverse md:flex-row gap-6'>
				<div className='md:flex-2 space-y-6'>
					{props.service.Description.map((block, index) => {
						switch (block.type) {
							case 'paragraph':
								return (
									<p key={index} className='font-light'>
										{renderChildren(block.children)}
									</p>
								)

							case 'list':
								return (
									<ul key={index} className='space-y-2'>
										{block.children.map((item: any, itemIdx: number) => (
											<li key={itemIdx} className='flex items-center gap-2'>
												<strong className='text-primary'>—</strong>
												<p className='font-light'>
													{renderChildren(item.children)}
												</p>
											</li>
										))}
									</ul>
								)

							default:
								return null
						}
					})}
					{props.showButton && (
						<Link href={`services/${props.service.Slug}`}>
							<Button variant='secondary'>
								{t('buttonText')}
								<div className='bg-heading rounded-full p-2'>
									<ArrowUpRight className='size-3 stroke-3 text-white group-hover: duration-200' />
								</div>
							</Button>
						</Link>
					)}
				</div>
				<div className='md:flex-1 h-40 md:h-auto relative aspect-video md:aspect-square'>
					<Image
						src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props.service.Image.url}`}
						alt={`${props.service.Title} Image`}
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</Section>
	)
}
