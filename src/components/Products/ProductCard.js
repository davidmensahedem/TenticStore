import React from 'react';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { addProductToCart, setProductsTotalAmount, updateCartItemsCount } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const renderProductDescription = (description) => {
        return description.length < 15 ? description : `${description.substring(0, 16)}...`
    };

    const buyProduct = (product) => {
        dispatch(addProductToCart(product));
        dispatch(setProductsTotalAmount());
        dispatch(updateCartItemsCount());
    }

    return (
        <Card className='shadow-sm mb-5 bg-white max-width-300'>
            <Card.Img variant="top" className="tentic-top-selling-img" src={product && `${product.imageUrl}`} />
            <Card.Body className='bg-light'>
                <Card.Text><Link to={`/productdetails/${product && product.id}`}>{product && product.productTitle}</Link></Card.Text>
                <Card.Text><span className='text-muted mt-1 Product-description'>{product && renderProductDescription(product.description)}</span></Card.Text>
                <div className='d-flex justify-content-between'>
                    <p><Badge><b>{`${product && product.price}.00`}</b></Badge></p>
                    <small className='text-muted'><del>{`${product && product.oldprice}.00`}</del></small>
                </div>
                <Link className='tentic-text-light-brown' onClick={() => buyProduct(product)}>Buy now</Link>
            </Card.Body>
        </Card >
    );
}


export default ProductCard;