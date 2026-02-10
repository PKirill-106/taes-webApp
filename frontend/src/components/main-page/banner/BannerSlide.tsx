'use client'
import { Button } from '@/components/ui/button'
import { IBannerSlide } from '@/types/interfacesProps'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function BannerSlide(props: IBannerSlide) {
	const bannerColor = props.banner.Button_Color

	return (
		<div
			className={`relative flex flex-col-reverse md:flex-row gap-4 h-full p-6 overflow-hidden ${
				props.bannerBgColor === 'primary'
					? 'bg-primary text-white'
					: `bg-${props.bannerBgColor}`
			}`}
		>
			<div className='md:z-1 flex flex-col justify-between h-full w-full flex-2 gap-6 md:max-w-xl description-content'>
				<div className='space-y-3'>
					<div
						className={`flex w-fit px-2 rounded-sm ${
							props.bannerBgColor === 'primary'
								? 'bg-secondary text-primary'
								: 'bg-primary text-white'
						}`}
					>
						<p className='font-bold'>{props.banner.Short_Title}</p>
					</div>
					<h3>{props.banner.Title}</h3>
				</div>
				<p>{props.banner.Paragraph}</p>
				<ul className='space-y-2'>
					{props.banner.List.map(item => (
						<li key={item} className='flex items-center gap-2'>
							<strong
								className={
									props.bannerBgColor === 'primary'
										? 'text-secondary'
										: 'text-primary'
								}
							>
								—
							</strong>
							<p>{item}</p>
						</li>
					))}
				</ul>
				<Link href={`/service/${props.banner.Service.Slug}`}>
					<Button
						variant='grey'
						className={`flex items-center gap-2 bg-${bannerColor} w-full md:max-w-xs lg:max-w-sm h-full max-h-16 text-heading group`}
					>
						<p>{props.banner.Button_Text}</p>{' '}
						<div className='relative bg-heading rounded-full p-2'>
							<ArrowUpRight className='size-2 md:size-3 lg:size-4 stroke-3 text-white group-hover: duration-200' />
						</div>
					</Button>
				</Link>
			</div>
			<div className='w-full flex justify-center md:absolute md:bottom-6 md:right-6 md:justify-end'>
				<div className='relative w-64 md:w-80 lg:w-96'>
					<Image
						src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props.banner.Service.Image.url}`}
						alt='banner image'
						width={450}
						height={450}
						className='w-full h-auto object-contain'
						priority
					/>
				</div>
			</div>
		</div>
	)
}
