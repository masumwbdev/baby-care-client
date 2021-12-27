import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Faq from '../Faq/Faq';
import Feedback from '../Feedback/Feedback';
import GoodNess from '../GoodNess/GoodNess';
import MoreCategories from '../MoreCategories/MoreCategories';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews';
import ShopByAge from '../ShopByAge/ShopByAge';
import ShopByPrice from '../ShopByPrice/ShopByPrice';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <MoreCategories></MoreCategories>
            <ShopByPrice></ShopByPrice>
            <ShopByAge></ShopByAge>
            <Products></Products>
            <CustomerReviews></CustomerReviews>
            <GoodNess></GoodNess>
            <Reviews></Reviews>
            <Faq></Faq>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;