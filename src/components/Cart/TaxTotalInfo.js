import React from 'react';
import { Button, Stack } from 'react-bootstrap';

const TaxTotalInfo = () => {
    return (
        <Stack className='p-2 position-absolute fixed-bottom'>
            <div className='d-flex justify-content-between border-bottom'>
                <p className='align-text-bottom'>Taxes</p>
                <p className='align-text-bottom'><span className=""><b>$5.00</b></span></p>
            </div>
            <div className='d-flex justify-content-between border-bottom'>
                <p className='align-text-bottom'>Shipping</p>
                <p className='align-text-bottom'><span className=""><b>$5.00</b></span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='align-text-bottom'>Total</p>
                <p className='align-text-bottom'><span className=""><b>$5.00</b></span></p>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='primary' className="border rounded-pill border-primary">Proceed to Checkout</Button>
            </div>
        </Stack>
    );
}

export default TaxTotalInfo;