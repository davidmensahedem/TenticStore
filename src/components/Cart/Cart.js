import React from 'react';
import { Badge, Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import TaxTotalInfo from './TaxTotalInfo';

function Cart({ ...props }) {

    return (
        <>
            <Offcanvas show={false} {...props} className="bg-light">
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






