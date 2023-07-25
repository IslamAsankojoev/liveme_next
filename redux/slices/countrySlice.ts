import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface countrySliceProps {
	country: string
	code: string
	currency: string
}

type currenciesTypes = {
	[Keys: string]: string
}

const currencies: currenciesTypes = {
	ru: 'с',
	kg: 'с',
	en: '$',
	tr: '₺',
	pl: 'zł',
	kz: '₸',
	de: '€',
}

const initialState: countrySliceProps = {
	country: 'Turkey',
	code: 'tr',
	currency: '₺',
}

const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setCountry: (state, action: PayloadAction<countrySliceProps>) => {
			state.code = action.payload?.code
			state.country = action.payload?.country
			if (currencies[action.payload?.code.toLowerCase()]) {
				state.currency = currencies[action.payload?.code.toLowerCase()]
			} else {
				state.currency = '$'
				state.code = 'en'
			}
		},
		setCurrency: (state, { payload }) => {
			if (currencies[payload?.code.toLowerCase()]) {
				state.currency = payload?.currency
				state.code = payload?.code
				state.country = payload?.country
			} else {
				state.currency = '$'
				state.code = 'en'
			}
		},
	},
})

export const { setCountry, setCurrency } = countrySlice.actions

export default countrySlice.reducer
