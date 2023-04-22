import { createSlice, current } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'shoppingcart',
    initialState:{
        clothescount:0,
        groceriescount:0,
        totalcount:0
    },
    reducers:{
        incClothes:(state,action)=>{
           state.clothescount+=1
           state.totalcount+=1;
        },
        decClothes:(state,action)=>{
            state.clothescount-=1
            state.totalcount-=1;
        },
        incGroceries:(state,action)=>{
            state.groceriescount+=1
            state.totalcount+=1;
        },
        decGroceries:(state,action)=>{
            state.groceriescount-=1
            state.totalcount-=1;
        }
    }

})

export const {incClothes,decClothes,incGroceries,decGroceries}=slice.actions
export default slice.reducer