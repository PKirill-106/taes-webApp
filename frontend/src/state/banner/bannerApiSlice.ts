import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IBanner, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const bannerApi = createApi({
	reducerPath: 'bannerApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getBanners: builder.query<IBanner[], string>({
			queryFn: async locale => {
				return await apiWrapper(async () => {
					const res: ResponseType<IBanner[]> = await api.get(
						`/banners?populate[Service][fields][0]=documentId&populate[Service][populate][Image][fields][1]=url&populate[Service][fields][2]=Slug${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetBannersQuery } = bannerApi
