import { createSlice } from "@reduxjs/toolkit";

interface countrySliceProps {
  country: string;
  code: string;
  currency: string;
}

let currencies = {
  ru: 'с',
  kg: 'с',
  en: '$',
  tr: '₺',
  pl: 'zł',
};

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
      if(currencies[payload?.code.toLowerCase()]){
        state.currency = currencies[payload?.code.toLowerCase()];
      }
      else{
        state.currency = '$';
        state.code = 'en';
      }
    },
    setCurrency: (state, { payload }) => {
      if(currencies[payload?.code.toLowerCase()]){
        state.currency = payload?.currency;
        state.code = payload?.code;
        state.country = payload?.country;
      }
      else{
        state.currency = '$';
        state.code = 'en';
      }
    }
  }
});

export const { setCountry, setCurrency } = countrySlice.actions;

export default countrySlice.reducer;