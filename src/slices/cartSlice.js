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
        addProductToCart: (state, {payload}) => {
            console.log(payload);
            let cartItem = state.cart.find(item => item.id === payload.id);
            if(cartItem){
                cartItem.quantity += 1;
            }else{
                state.cart.push(payload);
            }
        },
        removeProductFromCart: (state, {payload}) => {
            state.cart.push(payload);
        },
        incrementProductQuantity: (state, {payload}) => {
            let cartItem = state.cart.find(cartItem => cartItem.id === payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
        },
        decrementProductQuantity: (state, {payload}) => {
            let cartItem = state.cart.find(cartItem => cartItem.id === payload.id);
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
            state.cartItemsCount = state.cart.length > 0 ? state.cart.length  : 0;
        },
        removeCartItem: (state,{payload}) => {
            let cartItem = state.cart.find(item => item.id === payload.id);
            let itemIndex = state.cart.indexOf(cartItem);
            console.log("Deleting Cart Item with id",itemIndex);
            state.cart.splice(itemIndex,1);
        },
        setProductsTotalAmount:(state,payload) => {
            let totalSum = 0;
            state.cart.forEach(item => totalSum += (item.quantity * item.price));
            totalSum += 1;
            state.cartTotalAmount = totalSum;
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
    updateCartItemsCount,
    setProductsTotalAmount,
    removeCartItem
} = cartSlice.actions;

export default cartSlice.reducer;