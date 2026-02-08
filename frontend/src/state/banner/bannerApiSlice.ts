import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IBanner, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerApi = createApi({
	reducerPath: 'bannerApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getBannersUa: builder.query<IBanner[], void>({
			queryFn: async () => {
				return await apiWrapper(async () => {
					const res: ResponseType<IBanner[]> = await api.get(
						'/banners?populate[Service][fields]=documentId',
					)

					return res.data.data
				})
			},
		}),
		getBannersEng: builder.query<IBanner[], void>({
			queryFn: async () => {
				return await apiWrapper(async () => {
					const res: ResponseType<IBanner[]> = await api.get(
						'/banners?populate[Service][fields]=documentId&locale=en',
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetBannersUaQuery, useGetBannersEngQuery } = bannerApi
