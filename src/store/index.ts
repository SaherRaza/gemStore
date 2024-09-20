import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";  // Import the default reducer
 import { cartSlice } from "./cartSlice";

// Define the store's state types based on slices
export type RootState = {
    products: ReturnType<typeof productReducer>;
     cart: ReturnType<typeof cartSlice.reducer>;
};

export const store = configureStore({
    reducer: {
        products: productReducer,  // Use default reducer import
         cart: cartSlice.reducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
