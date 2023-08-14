import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductToCart, updateCartItemsCount } from '../slices/cartSlice';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const paramObject = useParams();
    const { products } = useSelector(state => state.products);
    const product = products.find(product => product.id === paramObject.id);

    const addToCart = (product) => {
        dispatch(addProductToCart(product));
        dispatch(updateCartItemsCount());
    }

    return (<>

        <Container className='bg-light pt-4'>
            <Row>
                <Col md={8}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="images/marketplace.webp" alt="" className='tentic-productdetails-image mb-3' />
                    </div>
                </Col>
                <Col>
                    <p className='tentic-productdetails-title'>{product.productTitle}</p>
                    <div className='d-flex justify-content-between'>
                        <p><Badge><b>${product.price}00 USD</b></Badge></p>
                        <small className='text-muted'><del>${product.oldprice}.00 USD</del></small>
                    </div>
                    <hr />
                    <p className='text-muted mt-3 tentic-productdetails-summary'>
                        {product.description}
                    </p>
                    <Button variant="primary" className="mt-2" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    </>);
}

export default ProductDetails;