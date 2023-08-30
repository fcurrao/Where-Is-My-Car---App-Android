 
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import shopReducer from '../features/Shop/shopSlice' 
import cartReducer from '../features/Cart/cartSlice'
import userReducer from '../features/User/userSlice'
import orderReducer from '../features/Orders/orders'
import { shopApi } from '../Services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../Services/authServices'

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        orderReducer,
        userReducer,
        [shopApi.reducerPath]: shopApi.reducer, 
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store
 