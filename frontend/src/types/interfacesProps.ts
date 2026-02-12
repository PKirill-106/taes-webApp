import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { IBanner } from './interfaceApi'

export interface ILogo {
	type: 'main' | 'white'
	width: number
	height: number
}
export interface IMyTooltip {
	element: string | ReactNode
	tip: string
}
export interface IBannerSlide {
	banner: IBanner
}

export interface IBannerPagination {
	banners: IBanner[]
	activeIndex: number
	activeColor: string
	inactiveColor: string
}
export interface INavServices {
	itemKey: string
	showLocaleSwitch: boolean
}
export interface ICertModal {
	modalImage: string | null
	setModalImage: Dispatch<SetStateAction<string | null>>
}
export interface ICertButtons {
	swiperRef: RefObject<SwiperType | null>
	isBeginning: boolean
	isEnd: boolean
}
