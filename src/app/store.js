import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/dummyData";
import cartReducer from "./slice/CartSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer,
        cart: cartReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)