import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:"location",
    initialState:{
        location: {},
        isLocated: false
    },
    reducers:{
        updateLocation:(state, action)=>{
            state.isLocated = true;
            state.location = action.payload;
            localStorage.setItem("userLocation", JSON.stringify(action.payload))
        }
    }
})


export const {updateLocation} = locationSlice.actions
export default locationSlice.reducer;