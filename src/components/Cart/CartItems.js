import React from 'react';
import { Stack } from 'react-bootstrap';
import CartItem from './CartItem';

const CartItems = () => {
    return (
        <Stack gap={1}>
            {[1,2,3,4].map(n => <CartItem key={n} />)}
        </Stack>
    );
}

export default CartItems;