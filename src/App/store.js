import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feacture/cartSlice' 

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
}) 