import React from 'react';
import {  Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TaxTotalInfo = () => {

    const {cartTotalAmount} = useSelector(state => state.shoppingCart);

    return (
        <Stack className='p-2 position-absolute fixed-bottom'>
            <div className='d-flex justify-content-between border-bottom'>
                <p className='align-text-bottom'>Taxes</p>
                <p className='align-text-bottom'><span className=""><b>$1.00</b></span></p>
            </div>
            <div className='d-flex justify-content-between border-bottom'>
                <p className='align-text-bottom'>Shipping</p>
                <p className='align-text-bottom'><span className=""><b>$0.00</b></span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='align-text-bottom'>Total</p>
                <p className='align-text-bottom'><span className=""><b>${cartTotalAmount}.00</b></span></p>
            </div>
            <div className='d-flex justify-content-center'>
                <Link className="border rounded-pill bg-primary text-white text-decoration-none p-2" to="/checkout">Proceed to Checkout</Link>
            </div>
        </Stack>
    );
}

export default TaxTotalInfo;