import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import DiscOfferDisplay from '../DiscOfferDisplay/DiscOfferDisplay';
import Facilities from '../Facilities/Facilities';
import Faq from '../Faq/Faq';
import Feedback from '../Feedback/Feedback';
import GoodNess from '../GoodNess/GoodNess';
import MoreCategories from '../MoreCategories/MoreCategories';
import Products from '../Products/Products/Products';
import Reviews from '../Reviews/Reviews';
// import ShopByAge from '../ShopByAge/ShopByAge';
// import ShopByPrice from '../ShopByPrice/ShopByPrice';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Support></Support>
            <DiscOfferDisplay></DiscOfferDisplay>
            <MoreCategories></MoreCategories>
            {/* <ShopByPrice></ShopByPrice> */}
            {/* <ShopByAge></ShopByAge> */}
            <Products></Products>
            <CustomerReviews></CustomerReviews>
            <GoodNess></GoodNess>
            <Reviews></Reviews>
            <Facilities></Facilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;