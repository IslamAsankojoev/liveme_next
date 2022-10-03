import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchProducts = createAsyncThunk('productsFetchStatus', async (params) => {
//   // const res = await axios.get(`http://localhost:1337/api/products?locale=ru`, {
//   //   headers,
//   // });

//   return [1, 2, 3];
// });

const initialState = {
  items: [],
  status: 'panding',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
      state.status = 'success';
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
