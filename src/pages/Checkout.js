import React from 'react';
import { Col, Row, Form, Button, InputGroup, Container, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItems from '../components/Cart/CartItems';


const Checkout = () => {

    const { cart, cartItemsCount } = useSelector(state => state.shoppingCart);



    return (<>
        <Row className='bg-light'>

            <Col>
                <Container className='bg-white p-3' style={{ width: '80%' }}>
                    <Stack className='d-flex justify-content-center align-items-center mt-3'>
                        {cartItemsCount > 0 && cart.map(item => (<CartItems />))}
                    </Stack>
                </Container>
            </Col>

            <Col md={7}>
                <Container className='bg-white' style={{ width: '80%' }}>
                    <p className="text-center mt-3">Fill in your details and proceed to payment</p>
                    <Form className='p-3'>
                        <Row className="mb-3">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Container className='d-flex justify-content-center align-items-center'>
                            <Button variant="primary" type="submit">
                                Proceed to Payment
                            </Button>
                        </Container>
                    </Form>
                </Container>
            </Col>

        </Row>
    </>);
}

export default Checkout;