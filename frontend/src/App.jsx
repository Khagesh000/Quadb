import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

// Lazy-loaded components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AuthForm = React.lazy(() => import('./components/AuthForm'));
const ProductList = React.lazy(() => import('./pages/ProductDetailsPage'));
const Cart = React.lazy(() => import('./components/Cart'));

const App = () => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<div className="spinner">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/Product" element={<ProductList />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
