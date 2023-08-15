import React from 'react';
import { Button, Container, Stack, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setProductCategory } from '../../slices/productSlice';


const ProductCategories = () => {

    const {activeCategory} = useSelector(state => state.products);
    const dispatch = useDispatch();

    const setActiveCategory = (category) => {
        console.log(category);
        dispatch(setProductCategory(category));
    }

    const renderSelectedCategory = (category) => {
        let result = "";
        switch (category) {
            case "All":
                result = "bg-warning text-white"
                break;
            case "Music":
                result = "bg-primary text-white"
                break;
            case "Arts":
                result = "bg-success text-white"
                break;
            case "Video":
                result = "bg-danger text-white"
                break;
        
            default:
                break;
        }
        return result;

    };

    return (<Col md={3}>
        <Container className='shadow-sm p-4'>
            <Stack gap={2} className='border-right'>
                <Button variant="outline-warning" className={activeCategory === 'All' && renderSelectedCategory('All')} onClick={()=>setActiveCategory("All")}>All</Button>
                <Button variant="outline-primary" className={activeCategory === 'Music' && renderSelectedCategory('Music')} onClick={()=>setActiveCategory("Music")}>Music</Button>
                <Button variant="outline-success" onClick={()=>setActiveCategory("Arts")} className={activeCategory === 'Arts' && renderSelectedCategory('Arts')}>Arts</Button>
                <Button variant="outline-danger" onClick={()=>setActiveCategory("Videos")} className={activeCategory === 'Videos' && renderSelectedCategory('Videos')}>Video</Button>
            </Stack>
        </Container>
    </Col>);
}

export default ProductCategories;