import React from 'react';
import one from '../../../images/others/baby.jpg'
import two from '../../../images/others/bag.jpg'
import baby2 from '../../../images/others/baby2.png'
import './DiscOfferDisplay.css'
import { Link } from 'react-router-dom';

const DiscOfferDisplay = () => {
    return (
        <div>
            <div className='text-dark row width-control mx-auto mt-5'>
                <div className='col-sm-12 col-md-4 col-lg-4 meme'>
                    <div class="card bg-dark text-white border-0">
                        <img src={one} class="card-img img-fluid" alt="..." />
                        <div class="card-img-overlay text-end mt-md-3 mt-lg-4">
                            <h4 class="card-title">ME ME</h4>
                            <p class="card-text">Best towels</p>
                            <h5>25% - 45% OFF</h5>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4 biko'>
                    <div class="card bg-dark text-white border-0">
                        <img src={two} class="card-img img-fluid" alt="..." />
                        <div class="card-img-overlay text-end mt-md-3 mt-lg-4">
                            <h4 class="card-title">Bags</h4>
                            <p class="card-text">Baby bags</p>
                            <h5>15% - 25% OFF</h5>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <div class="card bg-dark text-white border-0 baby-love">
                        <img src={baby2} class="card-img img-fluid" alt="..." />
                        <div class="card-img-overlay text-start mt-md-3 mt-lg-4">
                            <h4 class="card-title">Baby Care Products</h4>
                            <h5>Baby Love</h5>
                            <Link to="/explore">
                                <button>Browse Products</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscOfferDisplay;