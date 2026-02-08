import { AxiosResponse } from 'axios'

export interface IResponseApi<T> {
	data: T
	meta?: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}
export type ResponseType<T> = AxiosResponse<IResponseApi<T>>
export type ErrorType = { status: string | number; message: string }

export interface IBanner {
	id: number
	documentId: string
	Title: string
	Short_Title: string
	Paragraph: string
	List: string[]
	Button_Text: string
	Background_Color: string
	Button_Color: string
	Order: number
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
}

export interface IService {
	id: number
	documentId: string
	Title: string
	Description: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
	Slug: string
}
export interface ICompanyData {
	id: number
	documentId: string
	Email: string
	Phone: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	Logo: ICompanyLogo
	White_Logo: ICompanyLogo
}
export interface ICompanyLogo {
	id: number
	documentId: string
	url: string
}
