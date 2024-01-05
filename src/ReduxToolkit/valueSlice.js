import { createSlice} from '@reduxjs/toolkit'



const valueSlice = createSlice({
    name:'value',
    initialState:1,
    reducers: {
        change_value:(state,action)=>{
            return state+action.payload.payload
        }
    }
});

export const { change_value} = valueSlice.actions;
export default valueSlice.reducer;