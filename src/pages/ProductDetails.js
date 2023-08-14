import React from 'react';
import { Badge, Button, Col, Container,Row } from 'react-bootstrap';

const ProductDetails = () => {
    return (<>
        
        <Container className='bg-light pt-4'>
            <Row>
                <Col md={8}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="images/indigi_art.webp" alt="image_indigi" className='tentic-productdetails-image mb-3' />
                    </div>
                </Col>
                <Col>
                    <p className='tentic-productdetails-title'>Product Title</p>
                    <div className='d-flex justify-content-between'>
                        <p><Badge><b>$5.00 USD</b></Badge></p>
                        <small className='text-muted'><del>$10.00 USD</del></small>
                    </div>
                    <hr />
                    <p className='text-muted mt-3 tentic-productdetails-summary'>Product description is the description of the product.Product description is the description of the product.Product description is the description of the product.</p>
                    <Button variant="primary" className="mt-2">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    </>);
}

export default ProductDetails;