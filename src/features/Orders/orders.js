import { createSlice } from "@reduxjs/toolkit";  

export const OrderSlice = createSlice({
    name: "orders",
    initialState: {
        value: {
            numberOrder: 0,
            user: "Hardcoder user",
            updatedAt: "",
            total: 0,
            items: [] 
        }
    },
    reducers: {
        addOrder: (state, action) => {
            state.value.total = 0
            state.value.items.push(action.payload)
            action.payload.CartData.map( product =>{
                const currentSubTotal = product.quantity * product.price  
                state.value.total +=   currentSubTotal  
            })
            state.value.updatedAt = new Date().toLocaleString()
            state.value.numberOrder =  Math.floor(Math.random() * 1000000)
        },
        removeOrder: (state,action) => {
            numberOrder: 0,
            state.value = {user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []}
         
        }
    }
})

export const {addOrder, removeOrder} = OrderSlice.actions

export default OrderSlice.reducer


