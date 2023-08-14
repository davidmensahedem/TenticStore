import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "products",
    initialState: {
        cart: [],
        cartTotalAmount: 0,
        cartItemsCount: 0,
        cartState: false
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeProductFromCart: (state, action) => {
            state.cart.push(action.payload);
        },
        incrementProductQuantity: (state, action) => {
            let cartItem = state.cart.find(cartItem => cartItem.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
        },
        decrementProductQuantity: (state, action) => {
            let cartItem = state.cart.find(cartItem => cartItem.id === action.payload.id);
            if (cartItem && cartItem.quantity <= 0) {
                cartItem.quantity = 0;
            }else{
                cartItem.quantity -= 1;
            }

            
        },
        showCart: (state) => {

            state.cartState = true;
        },
        hideCart: (state) => {
            state.cartState = false
        },
        updateCartItemsCount: (state) => {
            state.cartItemsCount = state.cart.length > 1 ? state.cart.length  : 0;
        }
    }
});

export const {
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    showCart,
    hideCart,
    updateCartItemsCount
} = cartSlice.actions;

export default cartSlice.reducer;