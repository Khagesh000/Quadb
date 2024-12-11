import React from 'react';
import '../assets/css/HomePageFootEnquiry.css'; // Import external CSS
import LeftImage from '../assets/images/LeftSide.png'; // Replace with your image path
import RightImage from '../assets/images/RightSide.jpg'; // Replace with your image path

export default function HomePageFootEnquiry() {
  return (
    <div className="HomePageFootEnquiry-container">
      <div className="HomePageFootEnquiry-left">
        <img src={LeftImage} alt="Left" className="HomePageFootEnquiry-image" />
      </div>
      <div className="HomePageFootEnquiry-center">
        <h2 className="HomePageFootEnquiry-title">Join Our Newsletter</h2>
        <p className="HomePageFootEnquiry-description">Sign up for details, new products and promotions</p>
        <div className="HomePageFootEnquiry-input-container">
          <i className="fa fa-envelope HomePageFootEnquiry-icon"></i>
          <input
            type="email"
            placeholder="Enter your email address"
            className="HomePageFootEnquiry-input"
          />
          <button className="HomePageFootEnquiry-signup">Sign Up</button>
        </div>
      </div>
      <div className="HomePageFootEnquiry-right">
        <img src={RightImage} alt="Right" className="HomePageFootEnquiry-image" />
      </div>
    </div>
  );
}
