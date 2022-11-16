import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/cartSlice'
import country from './slices/countrySlice'
import lang from './slices/langSlice'
import loader from './slices/loaderSlice'
import products from './slices/productSlice'
import thankYou from './slices/thankYouSlice'
import user from './slices/userSlice'
import wish from './slices/wishSlice'

const store = configureStore({
	reducer: {
		products,
		user,
		cart,
		thankYou,
		lang,
		wish,
		loader,
		country,
	},
})

export default store

export type RootSate = ReturnType<typeof store.getState>
