import React from 'react';
import '../assets/css/ShopPageBanner.css';
import ShopPageBannerImage from '../assets/images/ShopPageBanner.jpg'

export default function ShopPageBanner() {
  return (
    <div className="shoppagebanner-container">
      <img 
        src={ShopPageBannerImage} 
        alt="Shop Banner" 
        className="shoppagebanner-image" 
      />
      <div className="shoppagebanner-content">
        <div className="shoppagebanner-breadcrumb">Home &gt; Shop</div>
        <div className="shoppagebanner-title">Shop Page</div>
        <div className="shoppagebanner-subtitle">Let’s Design</div>
      </div>
    </div>
  );
}
