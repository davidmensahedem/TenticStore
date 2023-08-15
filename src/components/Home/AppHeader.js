import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AppHeader = ({title,message}) => {
    return (
        <Row>
            <Col>
                <div className="Home-header">
                    <p>{title}</p>
                    <p>{message}</p>
                </div>
            </Col>
        </Row>
    );
}

export default AppHeader;