import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import user from './slices/userSlice';
import cart from './slices/cartSlice';
import thankYou from './slices/thankYouSlice';

const store = configureStore({
  reducer: {
    products,
    user,
    cart,
    thankYou,
  },
});

export default store;
