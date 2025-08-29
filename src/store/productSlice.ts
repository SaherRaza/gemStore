import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, DATA } from "../../assets/data/data";

// define initial state type
interface ProductState {
    products: Product[];
    selectedProduct: Product | null;  
    filteredProducts: Product[];  // New state to store filtered products by category
    filteredCount: number
}

const initialState: ProductState = {
    products: DATA,
    selectedProduct: null,
    filteredProducts: [],  // initially empty
    filteredCount: 0
};

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setSelectedProduct: (state, action: PayloadAction<string>) =>
        {
            const productId = action.payload;
            state.selectedProduct = state.products.find((p) => p.id === productId) || null;
        },
        setSelectedCategory: (state, action: PayloadAction<string>) =>
        {
            const category = action.payload;
            //filter products by category
            state.filteredProducts = state.products.filter(
                (product) => product.category === category
            )
            //update the count of filtered products
            state.filteredCount = state.filteredProducts.length;
        },
        filteredProductsByCategory: (state, action: PayloadAction<string>) =>
        {
            const category = action.payload;
            state.filteredProducts = state.products.filter(
                (product) => product.category === category
            );
            state.filteredCount = state.filteredProducts.length;
        },
        showAllProducts: (state) =>
        {
            state.filteredProducts = state.products;
            state.filteredCount = state.products.length;
        }
    }
});

// Export the actions and the reducer
export const { setSelectedProduct, setSelectedCategory,filteredProductsByCategory,showAllProducts } = productSlice.actions;
export default productSlice.reducer;