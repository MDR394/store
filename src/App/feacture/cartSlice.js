import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ArrayItems: [],
    amount: 0,
    total: 0
}

const userSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.ArrayItems.find(item => item.id === action.payload.id)
            if(findItem){

            }else{
                state.ArrayItems.push(action.payload)
                state.amount = state.amount + 1
            }
            
        },
        clearCart: (state) => {
            state.ArrayItems = []
        },
        removeFromCart: (state, action) => {
            state.ArrayItems = state.ArrayItems.filter((item) => item.id !== action.payload);
            state.amount = state.amount - 1
          },
        increseItem: (state, action) => {
            const getitem = state.ArrayItems.find(item => item.id === action.payload.id)
            getitem.amount = getitem.amount + 1
            state.amount = state.amount + 1
        },
        decreaseItem: (state, action) => {
            const getitem = state.ArrayItems.find(item => item.id === action.payload.id)
            getitem.amount = getitem.amount - 1
            state.amount = state.amount - 1
        },
        calculateTotal: (state) => {
            let amount = 0; 
            let total = 0;
            state.ArrayItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount; 
            state.total = total;
        }
    }
})

export const { addToCart, removeFromCart, increseItem, decreaseItem, calculateTotal, clearCart } = userSlice.actions;

export default userSlice.reducer;