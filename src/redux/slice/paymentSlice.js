import { createSlice } from "@reduxjs/toolkit";


const initialState = [

]

const today = new Date()

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const mainDate = `${day}/${month}/${year}`
export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        makePayment: (state, action) => {
            const newPayment = {
                id: Math.floor(Math.random() * 10000),
                amount: action.payload.amount,
                wallet: action.payload.wallet,
                coin: action.payload.coin,
                narration: action.payload.narration,
                bool: true,
                date: mainDate
            }

            state.push(newPayment)
        },
        clearPayment: (state) => {
            state.length = 0
        },
        numberOfPayment: (state) => {
            // state.length()
        },
    }
})
export const { makePayment, clearPayment, numberOfPayment } = paymentSlice.actions;
export default paymentSlice.reducer;