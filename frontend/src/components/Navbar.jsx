import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar-header">
            {/* Top Section with Offer */}
            <div className="navbar-top">
                <div className="navbar-offer">
                    <span className="navbar-offer-icon">%</span> 30% off storewide - 
                    <Link to="/cart" className="navbar-shop-link" onClick={closeMenu}> Shop Now</Link>
                </div>
            </div>

            {/* Main Navbar Section */}
            <div className="navbar-main">
                {/* Logo */}
                <div className="navbar-logo">3legant</div>

                {/* Menu Icon for Small Screens */}
                <div className="navbar-menu-icon" onClick={toggleMenu}>
                    <span className="navbar-menu-bar"></span>
                    <span className="navbar-menu-bar"></span>
                    <span className="navbar-menu-bar"></span>
                </div>

                {/* Center Navigation Links */}
                <nav className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
                    <Link to="/products" className="navbar-link" onClick={closeMenu}>Products</Link>
                    <Link to="/shop" className="navbar-link" onClick={closeMenu}>Shop</Link>
                    <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact Us</Link>
                </nav>

                {/* Right Side Icons */}
                <div className="navbar-icons">
                    <span className="navbar-icon search-icon">&#128269;</span> {/* Search Icon */}
                    <span className="navbar-icon bag-icon">&#128722;</span> {/* Bag Icon */}
                    <span className="navbar-icon account-icon">&#128100;</span> {/* Google Account Icon */}
                </div>
            </div>
        </header>
    );
};

export default Navbar;