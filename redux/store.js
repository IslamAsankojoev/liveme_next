import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
