import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AppHeader = (props) => {
    return (
        <Row>
            <Col>
                <div className="Home-header">
                    <p>Tentic Shop</p>
                    <p>The authentic NFT market platform to safely buy and own products.</p>
                </div>
            </Col>
        </Row>
    );
}

export default AppHeader;