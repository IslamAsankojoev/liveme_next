import { createSlice } from '@reduxjs/toolkit';

interface thankYouSliceProps {
  visible: boolean;
}

const initialState: thankYouSliceProps = {
  visible: false,
};

const thankYouSlice = createSlice({
  name: 'thankYou',
  initialState,
  reducers: {
    setShow(state) {
      state.visible = true;
    },
    setHide(state) {
      state.visible = false;
    },
  },
});

export const { setShow, setHide } = thankYouSlice.actions;

export default thankYouSlice.reducer;
