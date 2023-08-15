import React from 'react';
import { Button, Container, Stack, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setProductCategory } from '../../slices/productSlice';


const ProductCategories = () => {

    const dispatch = useDispatch();

    const setActiveCategory = (category) => {
        console.log(category);
        dispatch(setProductCategory(category));
    }

    return (<Col md={3}>
        <Container className='shadow-sm p-4'>
            <Stack gap={2} className='border-right'>
                <Button variant="outline-warning" onClick={()=>setActiveCategory("All")}>All</Button>
                <Button variant="outline-primary" onClick={()=>setActiveCategory("Music")}>Music</Button>
                <Button variant="outline-success" onClick={()=>setActiveCategory("Arts")}>Arts</Button>
                <Button variant="outline-danger" onClick={()=>setActiveCategory("Videos")}>Video</Button>
            </Stack>
        </Container>
    </Col>);
}

export default ProductCategories;