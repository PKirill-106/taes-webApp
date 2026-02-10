'use client'
import Section from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetBannersQuery } from '@/state/banner/bannerApiSlice'
import { useLocale } from 'next-intl'
import { useRef } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import BannerSlide from './BannerSlide'
import 'swiper/swiper.css'
import 'swiper/css/pagination'

export default function BannerSection() {
	const locale = useLocale()
	const { data: banners, isLoading, isError } = useGetBannersQuery(locale)

	const swiperRef = useRef<SwiperClass | null>(null)

	if ((!banners && !isLoading && !isError) || banners == undefined) {
		return
	} else if (isError) {
		return
	}

	return (
		<Section>
			{isLoading ? (
				<Skeleton className='w-full h-90 md:h-125 rounded-xl overflow-hidden shadow-md' />
			) : (
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop
					onSwiper={swiper => (swiperRef.current = swiper)}
					className='w-full max-w-5xl mx-auto rounded-xl shadow-lg'
					onMouseEnter={() => swiperRef.current?.autoplay.stop()}
					onMouseLeave={() => swiperRef.current?.autoplay.start()}
				>
					{banners.map(banner => {
						const bannerBgColor = banner.Background_Color

						return (
							<SwiperSlide
								key={banner.documentId}
								className={`bg-${bannerBgColor}`}
							>
								<BannerSlide banner={banner} bannerBgColor={bannerBgColor} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			)}
		</Section>
	)
}
