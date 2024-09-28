import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../assets/data/data";

interface favoriteState
{
    items: Product[];
}

const initialState: favoriteState = {
    items:[]
};

 const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
     reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      if (!state.items.find(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
 });

 
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;