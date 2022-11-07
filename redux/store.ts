import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import user from './slices/userSlice';
import cart from './slices/cartSlice';
import thankYou from './slices/thankYouSlice';
import lang from './slices/langSlice';
import wish from './slices/wishSlice';
import loader from './slices/loaderSlice';
import country from './slices/countrySlice';

const store = configureStore({
  reducer: {
    products,
    user,
    cart,
    thankYou,
    lang,
    wish,
    loader,
    country,
  },
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;