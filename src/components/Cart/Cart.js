import React from 'react';
import {  Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import TaxTotalInfo from './TaxTotalInfo';
import { useDispatch, useSelector } from 'react-redux';
import { hideCart } from '../../slices/cartSlice';

function Cart({ ...props }) {

    const {cartState} = useSelector(state => state.shoppingCart);

    const dispatch = useDispatch();

    const handleClose = () => dispatch(hideCart());

    return (
        
        <>
            <Offcanvas show={cartState && cartState} onHide={handleClose} {...props} className="bg-light">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <CartItems/>
                       <TaxTotalInfo/>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;






