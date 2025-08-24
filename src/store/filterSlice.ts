import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    applyFilters: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
    resetFilters: () => {
      return {};
    }
  }
});

export const { applyFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;



interface FilterState
{
    minPrice: number;
    maxPrice: number;
    colors: string[];
    rating: number;
    category: string | null;
    discounts: number[];
}

interface Product
{
    id: string;
    title: string;
    price: number;
    color: string;
    rating: number;
    category: string;
    discount:number
}