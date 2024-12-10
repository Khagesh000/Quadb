import React, { useEffect } from 'react';
import '../assets/css/Cart.css';

const Cart = ({ cartItems, removeFromCart, cartVisible, setCartVisible, updateQuantity }) => {
    useEffect(() => {
        console.log('Cart component rendered with visibility:', cartVisible);
    }, [cartVisible]);

    // Calculate subtotal and total
    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);
    };

    return (
        <div className={`cart-popup ${cartVisible ? 'show' : 'hide'}`}>
            <div className="cart-header">
                <span className="cart-title">Your Cart</span>
                <button className="cart-close-btn" onClick={() => setCartVisible(false)}>
                    X
                </button>
            </div>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div className="cartproduct-item" key={index}>
                            <div className="cartproduct-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cartproduct-details">
                                <div className="cartproduct-name">{item.name}</div>
                                <div className="cartproduct-price">{item.price} Rs</div>
                                <div className="cartproduct-quantity">
                                    <button 
                                        className="quantity-btn" 
                                        onClick={() => updateQuantity(item.name, 'decrement')}
                                    >
                                        -
                                    </button>
                                    <span className="quantity-text">{item.quantity}</span>
                                    <button 
                                        className="quantity-btn" 
                                        onClick={() => updateQuantity(item.name, 'increment')}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="cartproduct-remove">
                                <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                                    X
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>

            {/* Bottom Section: Subtotal, Total, Checkout, View Cart */}
            <div className="cart-summary">
                <div className="cart-summary-item">
                    <span>Subtotal:</span>
                    <span>{calculateTotal()} Rs</span>
                </div>
                <div className="cart-summary-item">
                    <span>Total:</span>
                    <span>{calculateTotal()} Rs</span>
                </div><br></br>
                <div className="cart-summary-buttons">
                    <div><button className="checkout-btn">Checkout</button></div><br></br>
                    <button className="view-cart-btn" onClick={() => setCartVisible(true)}>
                        View Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
