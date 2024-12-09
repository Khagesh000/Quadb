import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../features/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.product.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
