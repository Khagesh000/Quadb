import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import HomePageDesign from '../components/HomePageDesign';
import HomePageProducts from '../components/HomePageProducts';
import HomePageCards from '../components/HomePageCards';
const HomePage = ({ addToCart }) => {
    return (
        <div>
            <HomePageBanner />
            <HomePageDesign />
            <HomePageProducts addToCart={addToCart}/>
            <HomePageCards />
        </div>
    );
};

export default HomePage;
