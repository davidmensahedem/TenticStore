import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const AppNavbar = (props) => {
    return (
        <Navbar expand="lg" className="App-Navbar">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Image src='images/risidio_logo.png' width={70} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <Nav.Link href="allcollections">All Collections</Nav.Link>
                        <Nav.Link href="productdetails">Product Details</Nav.Link>
                        <Nav.Link href="#action2">Trending</Nav.Link>
                        <Nav.Link href="#action2" className='mr-auto'><FontAwesomeIcon className='text-black' icon={faShoppingCart} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;