import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IService, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const serviceApi = createApi({
	reducerPath: 'serviceApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getServices: builder.query<IService[], string>({
			queryFn: async (locale: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService[]> = await api.get(
						`/services?populate[Image][fields][0]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
		getService: builder.query<IService, { slug: string; locale: string }>({
			queryFn: async ({ slug, locale }) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService[]> = await api.get(
						`/services?filters[Slug][$eq]=${slug}&populate[Image][fields][0]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data[0]
				})
			},
		}),
	}),
})

export const { useGetServicesQuery, useGetServiceQuery } = serviceApi
