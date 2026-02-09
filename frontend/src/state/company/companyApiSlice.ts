import { apiWrapper } from '@/lib/utils/api/apiHelpers'
import { api } from '@/lib/utils/api/axios'
import { ICompanyData, ResponseType } from '@/types/interfaceApi'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export const companyApi = createApi({
	reducerPath: 'companyApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getCompanyData: builder.query<ICompanyData, string>({
			queryFn: async locale => {
				return await apiWrapper(async () => {
					const res: ResponseType<ICompanyData> = await api.get(
						`/company-data?populate[Logo][fields][0]=url&populate[White_Logo][fields][1]=url${locale === 'en' ? '&locale=en' : ''}`,
					)

					return res.data.data
				})
			},
		}),
	}),
})

export const { useGetCompanyDataQuery } = companyApi
