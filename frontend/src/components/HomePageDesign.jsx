import React from 'react';
import '../assets/css/HomePageDesign.css'; // External CSS file

// Importing images
import HomePageDesign1 from '../assets/images/HomePageDesign1.jpg';
import HomePageDesign2 from '../assets/images/HomePageDesign2.jpg';
import HomePageDesign3 from '../assets/images/HomePageDesign3.jpg';

export default function HomePageDesign() {
    return (
        <div className="homepage-design">
            {/* Top Section */}
            <div className="homepage-top-section">
                {/* Left Content */}
                <div className="homepage-left-content">
                    <h1>Simple, Unique / Bottom Simply Better</h1>
                </div>
                {/* Right Content */}
                <div className="homepage-right-content">
                    <p>Explore our premium collection of home essentials designed to elevate your living space.</p>
                </div>
            </div>

            {/* Bottom Section with Cards */}
            <div className="homepage-cards-section">
                {/* Tall Left Card */}
                <div className="homepage-card tall-card">
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${HomePageDesign1})` }}
                    >
                        <div className="card-overlay top-left">
                            <h2>Bedsheet</h2>
                            <a href="/shop" className="shop-link">Shop Now</a>
                        </div>
                    </div>
                </div>

                {/* Two Rectangle Cards on the Right */}
                <div className="homepage-right-cards">
                    {/* Top Rectangle Card */}
                    <div className="homepage-card rectangle-card">
                        <div
                            className="card-image rightside-image"
                            style={{ backgroundImage: `url(${HomePageDesign2})` }}
                        >
                            <div className="card-overlay bottom-left">
                                <h2>Curtains</h2>
                                <a href="/shop" className="shop-link">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Rectangle Card */}
                    <div className="homepage-card rectangle-card">
                        <div
                            className="card-image rightside-image"
                            style={{ backgroundImage: `url(${HomePageDesign3})` }}
                        >
                            <div className="card-overlay bottom-left">
                                <h2>Pillow Covers</h2>
                                <a href="/shop" className="shop-link">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
