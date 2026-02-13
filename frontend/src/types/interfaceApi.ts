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
export interface IRichTextBlock {
	type: 'paragraph' | 'list' | 'heading' | 'quote'
	format?: 'unordered' | 'ordered'
	children: {
		text?: string
		bold?: boolean
		type: 'text'
		children?: IRichTextBlock[]
	}[]
}
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
export interface IServiceSection {
  title: string
  content: string | string[]
}
export interface IService {
	id: number
	documentId: string
	Title: string
	Description: IRichTextBlock[]
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
	Slug: string
	Sections: IServiceSection[]
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
	Description: IRichTextBlock[]
	Logo: IImage
	White_Logo: IImage
	Certificates: IImage[]
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
export interface IStrapiBlock {
	type: string
	children: { text: string; type: string; bold?: boolean; italic?: boolean }[]
	level?: number
}
export interface IPrivacyPolicy {
	id: number
	documentId: string
	privacy_policy: IStrapiBlock[]
	createdAt: string
	updatedAt: string
	publishedAt: string
	locale: string
}
