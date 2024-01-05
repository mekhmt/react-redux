import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice({
    name:"color",
    initialState:"red",
    reducers:{
        change_color:(prvState, action)=>{
            return action.payload.payload
        }
    }
});

export const { change_color} = colorSlice.actions

export default colorSlice.reducer