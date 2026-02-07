import { configureStore } from '@reduxjs/toolkit'
import { bannerApi } from './banner/bannerApiSlice'

export const store = configureStore({
	reducer: {
		[bannerApi.reducerPath]: bannerApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(bannerApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
