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
	Service: Pick<IService, 'id' | 'documentId' | 'Slug' | 'Image'>
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
	Image: IImage
}
export interface ICompanyData {
	id: number
	documentId: string
	Email: string
	Phone: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
	Adress: string
	WorkHours: string
	Logo: IImage
	White_Logo: IImage
}
export interface IPartner {
	id: number
	documentId: string
	Name: string
	Slug: string
	Description: string | null
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
	Order: number
	Logo: IImage
}
export interface IRecommendation {
	id: number
	documentId: string
	Text: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
	Partner: IPartner
	Image: IImage | null
}
export interface IImage {
	id: number
	documentId: string
	url: string
}
