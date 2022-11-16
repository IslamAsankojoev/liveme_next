import { createSlice } from '@reduxjs/toolkit'

interface LoaderState {
	isLoading: boolean
}

const initialState: LoaderState = {
	isLoading: false,
}

export const loaderSlice = createSlice({
	name: 'loader',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const { setLoading } = loaderSlice.actions

export default loaderSlice.reducer
