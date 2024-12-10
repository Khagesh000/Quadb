import React, { useState, Suspense, useTransition } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


const HomePage = React.lazy(() => import('./pages/HomePage'));
const AuthForm = React.lazy(() => import('./components/AuthForm'));
const ProductList = React.lazy(() => import('./pages/ProductDetailsPage'));
const Cart = React.lazy(() => import('./components/Cart'));

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [isPending, startTransition] = useTransition(); // Handling transitions

    const addToCart = (product) => {
        startTransition(() => {
            setCartItems((prevItems) => {
                const existingItem = prevItems.find(item => item.name === product.name);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.name === product.name
                            ? { ...item, quantity: item.quantity + 1 }  // Increment quantity if already in cart
                            : item
                    );
                }
                return [...prevItems, { ...product, quantity: 1 }];  // Add new product with quantity 1
            });
            setCartVisible(true); // Show the cart immediately after adding item
        });
    };

    const removeFromCart = (productName) => {
        setCartItems((prevItems) => prevItems.filter(item => item.name !== productName));
    };

    const updateQuantity = (productName, operation) => {
        setCartItems((prevItems) => {
            return prevItems.map(item => {
                if (item.name === productName) {
                    const updatedQuantity = operation === 'increment' ? item.quantity + 1 : item.quantity - 1;
                    return { ...item, quantity: Math.max(updatedQuantity, 1) };  // Prevent quantity from going below 1
                }
                return item;
            });
        });
    };

    return (
        <Router>
            <Navbar cartItems={cartItems} toggleCart={() => setCartVisible((prev) => !prev)} />

            {/* Conditionally render Cart based on visibility */}
            {cartVisible && (
                <Suspense fallback={<div>Loading Cart...</div>}>
                    <Cart
                        cartItems={cartItems}
                        removeFromCart={removeFromCart}
                        cartVisible={cartVisible}
                        setCartVisible={setCartVisible}
                        updateQuantity={updateQuantity} // Pass updateQuantity here
                    />
                </Suspense>
            )}

            <Suspense fallback={<div className="spinner">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage addToCart={addToCart} />} />
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/Product" element={<ProductList />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} cartVisible={cartVisible} setCartVisible={setCartVisible} />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
