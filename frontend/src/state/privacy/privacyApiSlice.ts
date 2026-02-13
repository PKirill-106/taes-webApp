import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { IPrivacyPolicy, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const privacyApi = createApi({
	reducerPath: 'privacyApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getPrivacy: builder.query<IPrivacyPolicy, string>({
			queryFn: async (locale: string) => {
				return await apiWrapper(async () => {
					const res: ResponseType<IPrivacyPolicy> = await api.get(
						`/privacy-policy${locale === 'en' ? '?&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetPrivacyQuery } = privacyApi
