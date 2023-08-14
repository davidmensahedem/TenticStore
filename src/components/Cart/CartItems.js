import React, { useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import CartItem from './CartItem';
import {  useSelector } from 'react-redux';

const CartItems = () => {

    const {cart} = useSelector(state=> state.shoppingCart);

    useEffect(()=>{

    },[cart])

    return (
        <Stack gap={1}>
            {cart && cart.map(item => <CartItem item={item} key={item.id} />)}
        </Stack>
    );
}

export default CartItems;