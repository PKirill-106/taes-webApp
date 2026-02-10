import { ReactNode } from "react"
import { IBanner } from "./interfaceApi"

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
