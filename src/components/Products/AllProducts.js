import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import ProductCategories from './ProductCategories';


const AllProducts = () => {

    const { products, activeCategory } = useSelector(state => state.products);
    let filteredProducts = [];
    if (activeCategory === "All") {
        filteredProducts = products
    } else {
        filteredProducts = products.filter(product => product.category === activeCategory);
    }

    return (
        <>
            <Row>
                <ProductCategories />
                <Col>
                    <div className='p-3'>
                        <Row>
                            {filteredProducts && filteredProducts.map(product => (
                                <Col md={4}>
                                    <ProductCard className="h-50" key={product.id} product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default AllProducts;