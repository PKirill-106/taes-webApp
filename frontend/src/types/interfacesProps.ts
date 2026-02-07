import { ReactNode } from "react"

export interface ILogo {
	type: 'main' | 'white'
	width: number
	height: number
}
export interface IMyTooltip {
	element: string | ReactNode
	tip: string
}