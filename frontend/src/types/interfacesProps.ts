import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import {
	IBanner,
	IRecommendation,
	IService,
	IServiceSection,
} from './interfaceApi'

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
export interface ISwiperButtons {
	swiperRef: RefObject<SwiperType | null>
	isBeginning: boolean
	isEnd: boolean
}
export interface IMainServices {
	service: IService
	showButton?: boolean
}
export interface IServiceSectionProps {
	section: IServiceSection
}
export interface IMap {
	className: string
}
export interface IRecommendationItem {
	r: IRecommendation
	id: number
}
