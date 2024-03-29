import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./const";

const cartSlice = createSlice({
    name:"cart",
    initialState:defaultState,
    reducers:{
        addItem:(state, action)=>{
            state.cartItems=[
                ...state.cartItems,
                {
                    ...action.payload,
                    quantity:1
                }
                
            ]

        },
        removeItem:(state, action)=>{
            state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload.id)
           
        },
        clearItems:(state,action)=>{
            state.cartItems.length=0;
            state.restaurantInfo = defaultState.restaurant
        },
        updateItemQuantity:(state,action)=>{
            let targetItem = state.cartItems.filter((item)=> item.id===action.payload.id)[0]
            let otherItems = state.cartItems.filter((item)=> item.id!==action.payload.id)
            let newTargetObj = {
                ...targetItem,
                quantity:targetItem.quantity+action.payload.weight
            }
            state.cartItems = otherItems
            if(newTargetObj.quantity === 0)return
            state.cartItems = [...state.cartItems, newTargetObj]
        },
        updateRestaurant:(state, action)=>{
            state.restaurantInfo = action.payload
        }
    }
})

export const {addItem, removeItem, clearItems, updateItemQuantity, updateRestaurant} = cartSlice.actions
export default cartSlice.reducer;