import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IRecommendation, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const recommendationApi = createApi({
	reducerPath: 'recommendationApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getRecommendations: builder.query<IRecommendation[], string>({
			queryFn: async (locale: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IRecommendation[]> = await api.get(
						`/recommendations?populate[Partner][populate][Logo][fields][0]=url&populate[Image][fields][1]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetRecommendationsQuery } = recommendationApi
