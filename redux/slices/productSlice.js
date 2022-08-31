import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import headers from '../../config.js';

// export const fetchProducts = createAsyncThunk('productsFetchStatus', async (params) => {
//   // const res = await axios.get(`http://localhost:1337/api/products?locale=ru`, {
//   //   headers,
//   // });

//   return [1, 2, 3];
// });

const initialState = {
  items: [],
  status: 'loading',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     console.log(action.payload);
  //   },
  // },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
