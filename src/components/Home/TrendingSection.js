import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../Products/ProductCard';

const TrendingSection = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className='top-selling-section text-center'>
                        <h5 className='text-muted top-selling-title'>Trending</h5>
                    </div>
                </Col>
            </Row>
            <Row>
                {[1, 2, 3, 4].map(n => (
                    <Col key={n} md={3}>
                        <div className='container px-3'>
                            <ProductCard Product={n} />
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TrendingSection;