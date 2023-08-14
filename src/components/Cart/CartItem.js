import React from 'react';
import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { decrementProductQuantity, incrementProductQuantity } from '../../slices/cartSlice';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const increaseProduct = (product) => {
        dispatch(incrementProductQuantity(product));
    }

    const decreaseProduct = (product) => {
        dispatch(decrementProductQuantity(product));
    }


    return (<div className='d-flex justify-content-between border-bottom border-success mb-2'>
        <div className='p-2'>
            <img src={item.imageUrl} alt="cartitemimage" className='tentic-cart-image' />
        </div>
        <div className='p-2'>
            <p className='text-muted'><b>{item.productTitle}</b></p>
            <p className='text-muted'><b>Total: ${item.price * item.quantity}.00</b></p>
        </div>
        <div className='p-2'>
            <p className='text-center'><Badge className='text-wrap'><b>${item.price}.00</b></Badge></p>
            <div className='d-flex justify-content-center align-items-center border rounded-pill border-danger'>
                <span className='border-right px-2' onClick={()=>decreaseProduct(item)}>-</span>
                <span className='px-2'>{item.quantity}</span>
                <span className='border-left px-2' onClick={()=>increaseProduct(item)}>+</span>
            </div>
        </div>
    </div>);
}

export default CartItem;