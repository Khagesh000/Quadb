import React from 'react';
import ShopPageBanner from '../components/ShopPageBanner';
import ShopPageProducts from '../components/ShopPageProducts';

import HomePageFootEnquiry from '../components/HomePageFootEnquiry';
import Endbar from '../components/Endbar';


const ShopPage = ({ addToCart }) => {
    return (
        <div>
            <ShopPageBanner />
            <ShopPageProducts addToCart={addToCart}/>

            <HomePageFootEnquiry />
            <Endbar />
        </div>
    );
};

export default ShopPage;
