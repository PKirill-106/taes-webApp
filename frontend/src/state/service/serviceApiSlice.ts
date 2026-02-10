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
		getService: builder.query<IService, { id: string; locale: string }>({
			queryFn: async ({ id, locale }) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService> = await api.get(
						`/services/${id}?populate[Image][fields][0]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})
