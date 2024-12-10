import React from 'react';
import '../assets/css/HomePageCards.css';

export default function HomePageCards() {
  return (
    <div className="homepagecart-products-container">
      <div className="homepagecart-product-card">
        <div className="homepagecart-product-icon">
          <i className="fa fa-car"></i> {/* Vehicle Icon */}
        </div>
        <div className="homepagecart-product-details">
          <span className="homepagecart-product-name">Free Shopping</span>
          <span className="homepagecart-product-price">Order Above ₹200</span>
        </div>
      </div>

      <div className="homepagecart-product-card">
        <div className="homepagecart-product-icon">
          <i className="fa fa-cube"></i> {/* Lock Icon */}
        </div>
        <div className="homepagecart-product-details">
          <span className="homepagecart-product-name">30 Days Guarantee</span>
          <span className="homepagecart-product-price">Moneyback</span>
        </div>
      </div>

      <div className="homepagecart-product-card">
        <div className="homepagecart-product-icon">
          <i className="fa fa-lock"></i> {/* Lock Icon */}
        </div>
        <div className="homepagecart-product-details">
          <span className="homepagecart-product-name">Secure Payment</span>
          <span className="homepagecart-product-price">Secured by Stripe</span>
        </div>
      </div>

      <div className="homepagecart-product-card">
        <div className="homepagecart-product-icon">
          <i className="fa fa-phone"></i> {/* Telephone Icon */}
        </div>
        <div className="homepagecart-product-details">
          <span className="homepagecart-product-name">24/7 Support</span>
          <span className="homepagecart-product-price">Phone & Email Support</span>
        </div>
      </div>
    </div>
  );
}
