import { createSlice } from '@reduxjs/toolkit';

export type productProps = {
  id: number;
  title: string;
  title_ru?: string;
  title_en?: string;
  title_kg?: string;
  title_tr?: string;
  description: string;
  description_ru?: string;
  description_en?: string;
  description_kg?: string;
  description_tr?: string;
  image: string;
  regular_price: number,
  sale_price: number,
  is_published: boolean,
  category: number,
  slug: string,
};


interface productSliceProps {
  items: productProps[];
  status: string;
}


const initialState: productSliceProps = {
  items: [],
  status: 'panding',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
      state.status = 'success';
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
