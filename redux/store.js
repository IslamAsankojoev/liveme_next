import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import user from './slices/userSlice';
import cart from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products,
    user,
    cart,
  },
});

export default store;
