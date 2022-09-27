import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import user from './slices/userSlice';
import cart from './slices/cartSlice';
import thankYou from './slices/thankYouSlice';
import lang from './slices/langSlice';

const store = configureStore({
  reducer: {
    products,
    user,
    cart,
    thankYou,
    lang,
  },
});

export default store;
