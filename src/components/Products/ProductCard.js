import React from 'react';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ProductCard = ({n}) => {
    return (
        <Card className='shadow-sm mb-5 bg-white'>
            <Card.Img variant="top" src="images/risidio_logo.png"/>
            <Card.Body className='bg-light'>
                <Card.Text>
                    <p>Product Title</p>  
                    <p className='text-muted mt-3 Product-description'>Product description is the description of the product.</p>
                    <div className='d-flex justify-content-between'>
                        <p><Badge><b>$5.00 USD</b></Badge></p>
                        <small className='text-muted'><del>$10.00 USD</del></small>
                    </div>
                    <p><a href="#home" className='tentic-text-light-brown'>Buy now</a></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;