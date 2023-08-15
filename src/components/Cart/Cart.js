import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import TaxTotalInfo from './TaxTotalInfo';
import { useDispatch, useSelector } from 'react-redux';
import { hideCart } from '../../slices/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Cart({ ...props }) {

    const { cartState, cartItemsCount } = useSelector(state => state.shoppingCart);

    const dispatch = useDispatch();
    const handleClose = () => dispatch(hideCart());

    return (
        <>
            <Offcanvas show={cartState && cartState} onHide={handleClose} {...props} className="bg-light">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart <Badge className="bg-danger">{cartItemsCount}</Badge></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        {cartItemsCount > 0 ?
                            (<>
                                <div className='height-50vh'>
                                    <CartItems />
                                </div>
                                    <TaxTotalInfo />
                            </>) : (
                                <div className='p-2 d-flex flex-column justify-content-center align-items-center emptyCartContainer'>
                                    <div>
                                        <FontAwesomeIcon className='text-black m-1 empty-cart-icon' icon={faCartShopping} />
                                    </div>
                                    <div className='mt-3'>
                                        <p className="text-muted">Cart is empty</p> 
                                    </div>


                                </div>)
                        }
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;






