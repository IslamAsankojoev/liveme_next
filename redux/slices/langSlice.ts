import { createSlice } from '@reduxjs/toolkit'

interface langSliceProps {
	lang: string
}

const initialState: langSliceProps = {
	lang: 'ru',
}

const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		setLang: (state, action) => {
			state.lang = action.payload
		},
	},
})

export const { setLang } = langSlice.actions

export default langSlice.reducer
