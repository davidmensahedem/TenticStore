import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Products/ProductCard';

const TrendingSection = ({ products }) => {
    return (
        <>

            <Row>
                <div className='top-selling-section text-center'>
                    <h5 className='text-muted top-selling-title'>Trending</h5>
                </div>
                {products.map(product => (
                    <Col key={product.id} md={3}>
                        <div className='container px-3'>
                            <ProductCard product={product} />
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TrendingSection;