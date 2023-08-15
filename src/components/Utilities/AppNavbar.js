import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { showCart } from '../../slices/cartSlice';


const AppNavbar = (props) => {

    const dispatch = useDispatch();

    const displayCart = (evt) => { 
        evt.preventDefault();
        dispatch(showCart()) 
    };


    return (
        <Navbar expand="lg" className="bg-black">
            <Container fluid>
                <Link className='m-1'>
                    <img src='images/risidio_logo_192.png' alt="base_logo" id="base_logo" className="mr-2"width={40} height={30}/>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '80px' }}
                        navbarScroll
                    >
                        <Link to="/" className='m-1 text-decoration-none text-white'>Home</Link>
                        <Link to="/allcollections" className='m-1 text-decoration-none text-white'>Collections</Link>
                    </Nav>
                    <div className="d-flex m-1">
                        <FontAwesomeIcon className='text-white m-1 cartIcon' onClick={displayCart} icon={faShoppingCart} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;