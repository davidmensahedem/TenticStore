import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {

    const renderProductDescription = (description) => {
        return description.length < 50 ? description : `${description.substring(0,16)}...`
    };  

    return (
        <Card className='shadow-sm mb-5 bg-white'>
            <Card.Img variant="top" className="tentic-top-selling-img" src={product && `${product.imageUrl}`}/>
            <Card.Body className='bg-light'>
                <Card.Text>
                    <p>{product && product.productTitle}</p>  
                    <p className='text-muted mt-3 Product-description'>{product && renderProductDescription(product.description)}</p>
                    <div className='d-flex justify-content-between'>
                        <p><Badge><b>{`${product && product.price}.00`}</b></Badge></p>
                        <small className='text-muted'><del>{`${product && product.oldprice}.00`}</del></small>
                    </div>
                    <p><a href="#home" className='tentic-text-light-brown'>Buy now</a></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;