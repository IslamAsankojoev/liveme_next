import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type cartItemProps = {
	id: number
	title: string
	description: string
	image: string
	price: number
	is_published: boolean
	category: number
	slug: string
	count: number
}

type cartItemTypes = {
	[Property in keyof cartItemProps]: cartItemProps[Property]
}

interface cartSliceProps {
	items: cartItemTypes[]
	totalPrice: number
	totalItems: number
}

type cartItemKeys = keyof cartItemProps

const countPriceItemsTotal = (state: cartSliceProps) => {
	state.totalPrice = state.items.reduce(
		(totalPrice, item) => Math.ceil(totalPrice + item.price * item.count),
		0
	)
	state.totalItems = state.items?.reduce(
		(totalItems, item) => totalItems + item.count,
		0
	)
}

const initialState: cartSliceProps = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, { payload }: PayloadAction<cartItemProps>) {
			const fined = state.items.find((item) => item.id === payload.id)
			if (fined) {
				if (payload.count) {
					fined.count = fined.count + payload.count
				} else {
					fined.count++
				}
			} else {
				if (payload.count) {
					state.items.push({ ...payload, count: payload.count })
				} else {
					state.items.push({ ...payload, count: 1 })
				}
			}
			countPriceItemsTotal(state)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		removeItem(state, { payload }: PayloadAction<number>) {
			state.items = state.items.filter((item) => item.id !== payload)
			countPriceItemsTotal(state)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		clearCart(state) {
			state.items = []

			countPriceItemsTotal(state)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		setCart(state, { payload }: PayloadAction<cartItemProps[]>) {
			state.items = payload
			countPriceItemsTotal(state)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		increment(state, { payload }: PayloadAction<cartItemProps>) {
			const item = state.items.find((item) => item.id === payload.id)
			if (item) {
				item.count--
				countPriceItemsTotal(state)
				localStorage.setItem('cart', JSON.stringify(state.items))
			}
		},

		decrement(state, { payload }: PayloadAction<cartItemProps>) {
			const item = state.items.find((item) => item.id === payload.id)
			if (item) {
				item.count++
				countPriceItemsTotal(state)
				localStorage.setItem('cart', JSON.stringify(state.items))
			}
		},
	},
})

export const { addItem, removeItem, clearCart, increment, decrement, setCart } =
	cartSlice.actions
export default cartSlice.reducer
