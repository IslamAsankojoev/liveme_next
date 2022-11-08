import { createSlice } from "@reduxjs/toolkit";

interface countrySliceProps {
  country: string;
  code: string;
  currency: string;
}

const initialState: countrySliceProps = {
  country: 'United States',
  code: 'en',
  currency: '$',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountry: (state, { payload }) => {
      state.code = payload?.code;
      state.country = payload?.country;
      state.currency = payload?.currency;
    }
  }
});

export const { setCountry } = countrySlice.actions;

export default countrySlice.reducer;