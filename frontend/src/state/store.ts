import { configureStore } from '@reduxjs/toolkit'
import { bannerApi } from './banner/bannerApiSlice'
import { serviceApi } from './service/serviceApiSlice'
import { companyApi } from './company/companyApiSlice'

export const store = configureStore({
	reducer: {
		[bannerApi.reducerPath]: bannerApi.reducer,
		[serviceApi.reducerPath]: serviceApi.reducer,
		[companyApi.reducerPath]: companyApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			bannerApi.middleware,
			serviceApi.middleware,
			companyApi.middleware,
		),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
