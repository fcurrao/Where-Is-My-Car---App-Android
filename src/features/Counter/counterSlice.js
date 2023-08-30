import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state=>{
            state.value += 1
        },
        decrement: state=>{
            state.value -= 1
        },
        incrementByAmount: (state, actions) =>{
            state.value += actions.payload

        },
        reset: state=>{
            state.value = 1 
        },
    }

})

export const {increment , decrement,incrementByAmount ,reset} = counterSlice.actions

export default counterSlice.reducer