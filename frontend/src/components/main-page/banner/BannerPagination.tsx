import { cn } from '@/lib/utils'
import { IBannerPagination } from '@/types/interfacesProps'
import { useSwiper } from 'swiper/react'

export default function BannerPagination(props: IBannerPagination) {
  const swiper = useSwiper()

	return (
		<div className='flex items-center gap-2 mt-6'>
			{props.banners.map((_, index) => {
				const isActive = index === props.activeIndex
				return (
					<button
						key={index}
						onClick={() => swiper.slideToLoop(index)}
						className={cn(
							'h-2 md:h-3 rounded-full transition-all duration-500 ease-in-out cursor-pointer',
							isActive
								? `${props.activeColor} w-8 md:w-10`
								: `${props.inactiveColor} w-2 md:w-3 opacity-50`,
						)}
					/>
				)
			})}
		</div>
	)
}
