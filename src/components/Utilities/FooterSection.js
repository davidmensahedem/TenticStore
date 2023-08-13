import React from 'react';
import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap';


const FooterSection = () => {
    return (
        <>
            <Row>
                <Col>
                    <Container className='d-flex justify-content-center align-items-center bg-light'>
                        <div className='p-4 my-3'>
                            <Button variant='outline-success'>View all collections</Button>
                        </div>
                    </Container>
                </Col>
            </Row>

            <Container className='text-white bg-black mt-2'>
                <Row>
                    <Col>
                        <Stack className='d-flex justify-content-center align-items-center'>
                            <Image src='images/risidio_logo.png' className='img-responsive' width={80} height={80} />
                            <p>&copy; 2023 Risidio</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack className='d-flex justify-content-center align-items-center'>
                            <small className="p-2 footer-items-title">Terms</small>
                            <small className="p-2">Shipping Policy</small>
                            <small className="p-2">Terms and Conditions</small>

                        </Stack>
                    </Col>
                    <Col>
                        <Stack className='d-flex justify-content-center align-items-center'>
                            <small className="p-2 footer-items-title">Collections</small>
                            <small className="p-2">All</small>
                            <small className="p-2">Movies</small>

                        </Stack>
                    </Col>

                </Row>
            </Container>
        </>

    );
}

export default FooterSection;