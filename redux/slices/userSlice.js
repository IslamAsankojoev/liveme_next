import { createSlice } from '@reduxjs/toolkit';
import lodash from 'lodash';

const initialState = {
  loggedIn: false,
  data: {},
  header: {
    Authorization: '',
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, { payload }) {
      if (!lodash.isEmpty(payload)) {
        state.loggedIn = true;
        state.data = payload;
      } else {
        state.loggedIn = false;
        state.data = {};
      }
    },
    setToken(state, { payload }) {
      state.header.Authorization = 'Bearer ' + payload;
    },
  },
});

export const { setLoggedIn, setToken } = userSlice.actions;

export default userSlice.reducer;
