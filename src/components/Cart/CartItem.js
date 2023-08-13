import React from 'react';
import { Badge } from 'react-bootstrap';

const CartItem = (props) => {
    return (<div className='d-flex justify-content-between border-bottom border-success mb-2'>
        <div className='p-2'>
            <img src="images/risidio_logo.png" alt="cart item image" className='tentic-cart-image' />
        </div>
        <div className='p-2'>
            <p className='text-muted'><b>Product Title</b></p>
        </div>
        <div className='p-2'>
            <p className='text-center'><Badge className='text-wrap'><b>$5.00</b></Badge></p>
            <div className='d-flex justify-content-center align-items-center border rounded-pill border-primary'>
                <span className='border-right px-2'>-</span>
                <span className='px-2'>1</span>
                <span className='border-left px-2'>+</span>
            </div>
        </div>
    </div>);
}

export default CartItem;