import React from 'react';
import '../assets/css/Endbar.css';

export default function Endbar() {
  return (
    <div className="endbar-container">
      {/* Top Row */}
      <div className="endbar-top">
        <div className="endbar-left">
          3legant | Gift & Decoration Store
        </div>
        <div className="endbar-right">
          <a href="/home" className="endbar-link">Home</a>
          <a href="/blog" className="endbar-link">Blog</a>
          <a href="/shop" className="endbar-link">Shop</a>
          <a href="/product" className="endbar-link">Product</a>
          <a href="/contact" className="endbar-link">Contact Us</a>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="endbar-divider" />
      {/* Bottom Row */}
      <div className="endbar-bottom">
        <div className="endbar-bottom-left">
          &copy; 3legant | <a href="/privacy-policy" className="endbar-link">Privacy Policy</a> | <a href="/terms" className="endbar-link">Terms & Conditions</a>
        </div>
        <div className="endbar-bottom-right">
          <a href="https://instagram.com" className="endbar-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://facebook.com" className="endbar-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://youtube.com" className="endbar-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
