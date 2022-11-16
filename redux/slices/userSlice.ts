import { createSlice } from '@reduxjs/toolkit'
import lodash from 'lodash'

import { productTypes } from './productSlice'

export type orderItemProps = {
	id: number
	order: number
	product: productTypes
	product_count: number
	price_en: number | any | string
	price_ru: number | any | string
	price_tr: number | any | string
	price_kg: number | any | string
	price_pl: number | any | string
}

export type orderProps = {
	id: number
	created: string
	updated: string
	items: orderItemProps[]
	client_email: string
	client_address: string
	client_phone: string
	client_name: string
	payment_method: string
	order_status: string
	is_published: boolean
	user: number
	image?: string
	order_time?: string
}

export type userDataProps = {
	id: number
	email: string
	username: string
	first_name: string
	last_name: string
	address: string
	role: {
		id: number
		type: string
		discount: number
		score_pay: number
		image: string
	}
	token: {
		access: string
		refresh: string
	}
	orders: orderProps[]
}

interface userSliceProps {
	loggedIn: boolean
	data: userDataProps | null
}

const initialState: userSliceProps = {
	loggedIn: false,
	data: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoggedIn(state, { payload }) {
			if (!lodash.isEmpty(payload)) {
				state.loggedIn = true
				state.data = payload
			} else {
				state.loggedIn = false
				state.data = null
			}
		},
	},
})

export const { setLoggedIn } = userSlice.actions

export default userSlice.reducer
