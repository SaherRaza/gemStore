import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, DATA } from "../../assets/data/data";

// define initial state type
interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    // selectedProduct:  null;
}

const initialState: ProductState = {
    products: DATA,
    selectedProduct: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setSelectedProduct: (state, action: PayloadAction<number>) =>
        {
            const productId = action.payload;
            state.selectedProduct = state.products.find((p) => p.id === productId) || null;
        }
    }
});

// Export the actions and the reducer
export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;