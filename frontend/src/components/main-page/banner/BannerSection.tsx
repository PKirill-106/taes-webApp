'use client'
import Section from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetBannersQuery } from '@/state/banner/bannerApiSlice'
import { useLocale } from 'next-intl'
import { useRef, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import BannerSlide from './BannerSlide'
import 'swiper/swiper.css'
import BannerPagination from './BannerPagination'

export default function BannerSection() {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const locale = useLocale()
	const { data: banners, isLoading, isError } = useGetBannersQuery(locale)

	const swiperRef = useRef<SwiperClass | null>(null)

	if ((!banners && !isLoading && !isError) || banners == undefined) {
		return
	} else if (isError) {
		return
	}

	const currentBanner = banners[activeIndex]
	const isPrimary = currentBanner?.Background_Color === 'primary'

	const activeColorClass = isPrimary ? 'bg-secondary' : 'bg-primary'
	const inactiveColorClass = isPrimary ? 'bg-white' : 'bg-slate-400'

	return (
		<Section className='relative'>
			{isLoading ? (
				<Skeleton className='w-full h-90 md:h-125 rounded-xl overflow-hidden shadow-md' />
			) : (
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
					className='w-full max-w-5xl mx-auto rounded-xl shadow-lg [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:items-stretch'
					onMouseEnter={() => swiperRef.current?.autoplay.stop()}
					onMouseLeave={() => swiperRef.current?.autoplay.start()}
				>
					{banners.map(banner => (
						<SwiperSlide key={banner.documentId} className='h-auto!'>
							<BannerSlide banner={banner} />
						</SwiperSlide>
					))}
					<div className='absolute bottom-6 left-6 z-20'>
						<BannerPagination
							banners={banners}
							activeIndex={activeIndex}
							activeColor={activeColorClass}
							inactiveColor={inactiveColorClass}
						/>
					</div>
				</Swiper>
			)}
		</Section>
	)
}
