import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IPartner, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const partnerApi = createApi({
	reducerPath: 'partnerApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getPartners: builder.query<IPartner[], string>({
			queryFn: async (locale: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IPartner[]> = await api.get(
						`/partners?populate[Logo][fields][0]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetPartnersQuery } = partnerApi
