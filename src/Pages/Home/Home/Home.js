import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Faq></Faq>
        </div>
    );
};

export default Home;