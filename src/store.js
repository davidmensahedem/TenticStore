import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';


export default configureStore({
    reducer:{
        products:productSlice,
        shoppingCart:cartSlice
    }
});