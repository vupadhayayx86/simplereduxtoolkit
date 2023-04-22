import { configureStore } from "@reduxjs/toolkit";
import shoppingcart from "./storeReducer"

const store=configureStore({
    reducer:{
        shoppingcart
    }
})

export default store;