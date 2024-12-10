import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import HomePageDesign from '../components/HomePageDesign';
import HomePageProducts from '../components/HomePageProducts';

const HomePage = () => {
    return (
        <div>
            <HomePageBanner />
            <HomePageDesign />
            <HomePageProducts />
        </div>
    );
};

export default HomePage;
