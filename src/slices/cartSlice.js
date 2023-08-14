import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "products",
    initialState: {
        cart:[],
        cartTotalAmount:0,
        cartItemsCount:0,
        cartState:false
    },
    reducers: {
        addProductToCart: (state,action) => {
            state.cart.push(action.payload);
        },
        removeProductFromCart: (state,action) => {
            state.cart.push(action.payload);
        },
        incrementProductQuantity: (state,action) => {
            let cartItem = state.cart.find(cartItem => cartItem.id === action.payload.id);
            if(cartItem){
                cartItem.quantity += action.payload.quantity;
            }
        },
        showCart: (state) => {
            
            state.cartState = true;
        },
        hideCart: (state) => {
            state.cartState = false 
        }   
    }
});

export const { 
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    showCart,
    hideCart
} = cartSlice.actions;

export default cartSlice.reducer;