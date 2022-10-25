import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productProps } from './productSlice';

interface wishSliceProps {
  items: productProps[];
  totalItems: number;
}

const initialState: wishSliceProps = {
  items: [],
  totalItems: 0,
};

const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    toggleItem(state, { payload }: PayloadAction<productProps>) {
      const finded = state.items.find((item) => item.id === payload.id);
      if (!finded) {
        state.items.push(payload);
      } else {
        state.items = state.items.filter((item) => item.id !== payload.id);
      }
      state.totalItems = state.items.length;
      localStorage.setItem('wish', JSON.stringify(state.items));
    },
    clearWish(state) {
      state.items = [];
      state.totalItems = state.items.length;
      localStorage.setItem('wish', JSON.stringify(state.items));
    },

    setWish(state, { payload }: PayloadAction<productProps[]>) {
      state.items = payload;
      state.totalItems = state.items.length;
      localStorage.setItem('wish', JSON.stringify(state.items));
    },
  },
});

export const { toggleItem, clearWish, setWish } = wishSlice.actions;
export default wishSlice.reducer;
