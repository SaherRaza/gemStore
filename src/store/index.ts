import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import productSlice from "./productSlice";  // Import the default reducer
 import { cartSlice } from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import checkoutSlice from "./checkoutSlice";
import profileSlice from "./profileSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import creditCardSlice from './creditCardSlice';
import filterSlice from "./filterSlice";

const persistConfig = {
    key: 'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, profileSlice);
const persistedReducer1 = persistReducer(persistConfig, creditCardSlice);

// Define the store's state types based on slices
export type RootState = {
    products: ReturnType<typeof productSlice>;
    cart: ReturnType<typeof cartSlice.reducer>;
    favorites: ReturnType<typeof favoriteSlice>
    checkout: ReturnType<typeof checkoutSlice>
    profile: ReturnType<typeof profileSlice>
    card: ReturnType<typeof creditCardSlice>
     filter:ReturnType<typeof filterSlice>
};

export const store = configureStore({
    reducer: {
        products: productSlice,  // Use default reducer import
        cart: cartSlice.reducer,
        favorites: favoriteSlice,
        checkout: checkoutSlice,
        filter:filterSlice,
        profile: persistedReducer,
        card:persistedReducer1
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,// required for redux-persist
            
        })
});
export const persistor = persistStore(store);
// persistor.purge();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
