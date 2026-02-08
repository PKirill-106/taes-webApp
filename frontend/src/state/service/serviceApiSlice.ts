import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IService, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const serviceApi = createApi({
	reducerPath: 'serviceApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getServicesUa: builder.query<IService[], void>({
			queryFn: async () => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService[]> = await api.get(
						'/services?populate[Image][fields][0]=url',
					)

					return res.data.data
				})
			},
		}),
		getServicesEng: builder.query<IService[], void>({
			queryFn: async () => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService[]> = await api.get(
						'/services?populate[Image][fields][0]=url&locale=en',
					)

					return res.data.data
				})
			},
		}),
		getServiceUa: builder.query<IService, string>({
			queryFn: async (id: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService> = await api.get(
						`/services/${id}?populate[Image][fields][0]=url`,
					)

					return res.data.data
				})
			},
		}),
		getServiceEng: builder.query<IService, string>({
			queryFn: async (id: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IService> = await api.get(
						`/services/${id}?populate[Image][fields][0]=url&locale=en`,
					)

					return res.data.data
				})
			},
		}),
	}),
})
