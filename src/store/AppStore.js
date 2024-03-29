import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart/cartSlice";
import locationSlice from "./slices/location/locationSlice";


const appstore = configureStore({
    reducer:{
        cart:cartSlice,
        location :locationSlice
    }
})

export default appstore;