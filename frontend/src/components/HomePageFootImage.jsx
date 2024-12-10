import React from 'react';
import '../assets/css/HomePageFootImage.css';
import HomePageDesign1 from '../assets/images/HomePageFoot.jpg'; // Import external CSS

export default function HomePageFootImage() {
  return (
    <div className="homepagefoot-container">
      <div className="homepagefoot-left">
        <img src={HomePageDesign1} alt="Sale Image" className="homepagefoot-image" />
      </div>
      <div className="homepagefoot-right">
        <h2 className="homepagefoot-sale">Sale Up To 35% Off</h2>
        <p className="homepagefoot-content">Hundreds of new letters added!</p>
        <p className="homepagefoot-content">Explore our exclusive collection today.</p>
        <a href="/shop-now" className="homepagefoot-shopnow">
          Shop Now <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
