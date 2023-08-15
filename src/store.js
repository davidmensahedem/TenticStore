import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import notificationSlice from './slices/notificationSlice';


export default configureStore({
    reducer:{
        products:productSlice,
        shoppingCart:cartSlice,
        notifications:notificationSlice
    }
});