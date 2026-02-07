import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IBanner, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerApi = createApi({
	reducerPath: 'bannerApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getBanners: builder.query<IBanner[], void>({
			queryFn: async () => {
				return await apiWrapper(async () => {
					const res: ResponseType<IBanner[]> = await api.get('/banners')

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetBannersQuery } = bannerApi