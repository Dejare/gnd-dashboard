import { configureStore } from '@reduxjs/toolkit'
import paymentReducer from './slice/paymentSlice'
import counterReducer from './slice/counterSlice'
export const store = configureStore({
    reducer: {
        payment: paymentReducer,
        counter: counterReducer,
    }
})