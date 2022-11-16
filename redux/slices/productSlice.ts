import { createSlice } from '@reduxjs/toolkit'

type productProps = {
	id: number
	title: string
	title_ru?: string
	title_en?: string
	title_kg?: string
	title_tr?: string
	description: string
	description_ru?: string
	description_en?: string
	description_kg?: string
	description_tr?: string
	image: string
	price_ru: string
	price_en: string
	price_kg: string
	price_tr: string
	price_pl: string
	sale: number
	is_published: boolean
	category: number
	slug: string
}

export type productTypes = {
	[Property in keyof productProps]: productProps[Property]
}

type Keys = keyof productProps

interface productSliceProps {
	items: productTypes[]
	status: string
}

const initialState: productSliceProps = {
	items: [],
	status: 'pending',
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.items = action.payload
			state.status = 'success'
		},
	},
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
