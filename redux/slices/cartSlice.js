import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const countPriceItemsTotal = (state) => {
  state.totalPrice = state.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.count,
    0,
  );
  state.totalItems = state.items?.reduce((totalItems, item) => totalItems + item.count, 0);
};
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const finded = state.items.find((item) => item.id === payload.id);
      if (finded) {
        if (payload.count) {
          finded.count = finded.count + payload.count;
        } else {
          finded.count++;
        }
      } else {
        if (payload.count) {
          state.items.push({ ...payload, count: payload.count });
        } else {
          state.items.push({ ...payload, count: 1 });
        }
      }
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];

      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    setCart(state, { payload }) {
      state.items = payload;
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    increment(state, { payload }) {
      const item = state.items.find((item) => item.id === payload.id);
      item.count--;
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    decrement(state, { payload }) {
      const item = state.items.find((item) => item.id === payload.id);
      item.count++;
      countPriceItemsTotal(state);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart, increment, decrement, setCart } = cartSlice.actions;
export default cartSlice.reducer;
