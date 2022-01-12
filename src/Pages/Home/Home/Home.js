import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import SecondNav from '../../Shared/SecondNav/SecondNav';
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
            <SecondNav></SecondNav>
            <Navbar></Navbar>
            <Banner></Banner>
            <Support></Support>
            <DiscOfferDisplay></DiscOfferDisplay>
            <Products></Products>
            {/* <MoreCategories></MoreCategories> */}
            {/* <ShopByPrice></ShopByPrice> */}
            {/* <ShopByAge></ShopByAge> */}
            
            {/* <CustomerReviews></CustomerReviews> */}
            <GoodNess></GoodNess>
            <Reviews></Reviews>
            <Facilities></Facilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;