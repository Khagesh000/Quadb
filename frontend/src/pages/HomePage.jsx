import React from 'react';
import HomePageBanner from '../components/HomePageBanner';
import HomePageDesign from '../components/HomePageDesign';
import HomePageProducts from '../components/HomePageProducts';
import HomePageCards from '../components/HomePageCards';
import HomePageFootImage from '../components/HomePageFootImage';
import HomePageFootEnquiry from '../components/HomePageFootEnquiry';
import Endbar from '../components/Endbar';


const HomePage = ({ addToCart }) => {
    return (
        <div>
            <HomePageBanner />
            <HomePageDesign />
            <HomePageProducts addToCart={addToCart}/>
            <HomePageCards />
            <HomePageFootImage />
            <HomePageFootEnquiry />
            <Endbar />
        </div>
    );
};

export default HomePage;
