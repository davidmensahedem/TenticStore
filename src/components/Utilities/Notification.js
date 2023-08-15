import React from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../../slices/notificationSlice';

const Notification = () => {

    const { notyState,notyInfo } = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(hideNotification());

    return (<>
        <Row>
            <Col xs={6}>
                <Toast onClose={handleClose} show={notyState} delay={3000}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">{notyInfo && notyInfo.title}</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>{notyInfo && notyInfo.message}</Toast.Body>
                </Toast>
            </Col>
           
        </Row>
    </>);
}

export default Notification;