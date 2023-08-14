import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Products/ProductCard';



const TopSellingSection = ({ products }) => {
    return (
        <>

            <Row>
                <div className='top-selling-section text-center'>
                    <h5 className='text-muted top-selling-title'>Top Selling</h5>
                </div>
                {products.filter(product => product.isTopSelling).map(product => (
                    <Col key={product.id} md={3}>
                        <div className='container px-3'>
                            <ProductCard key={product.id} product={product} />
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TopSellingSection;