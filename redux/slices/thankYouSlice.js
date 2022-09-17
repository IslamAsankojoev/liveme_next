import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
};

const thankYouSlice = createSlice({
  name: 'thankYou',
  initialState,
  reducers: {
    setShow(state, { payload }) {
      state.visible = true;
    },
    setHide(state, { payload }) {
      state.visible = false;
    },
  },
});

export const { setShow, setHide } = thankYouSlice.actions;

export default thankYouSlice.reducer;
