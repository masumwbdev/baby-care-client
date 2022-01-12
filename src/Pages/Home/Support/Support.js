import React from 'react';
import './Support.css'
import oneImg from '../../../images/under-banner/one.png'
import twoImg from '../../../images/under-banner/two.png'
import threeImg from '../../../images/under-banner/three.png'
import fourImg from '../../../images/under-banner/four.png'

const Support = () => {
    return (
        <div className='support-main'>
            <div className='row width-control align-items-center support-container mx-auto text-end'>
                <div className='col-xm-12 col-sm-6 col-md-6 col-lg-3 d-flex'>
                    <div>
                        <img src={oneImg} alt="" />
                    </div>
                    <div className='ms-4'>
                        <p>Free Shipping</p>
                        <small>Deliver to Door</small>
                    </div>
                </div>
                <div className='col-xm-12 col-sm-6 col-md-6 col-lg-3 d-flex'>
                    <div>
                        <img src={twoImg} alt="" />
                    </div>
                    <div className='ms-4'>
                        <p>24x7 Support</p>
                        <small>in Safe Hands</small>
                    </div>
                </div>
                <div className='col-xm-12 col-sm-6 col-md-6 col-lg-3 d-flex'>
                    <div>
                        <img src={threeImg} alt="" />
                    </div>
                    <div className='ms-4'>
                        <p>Big Saving</p>
                        <small>at Lowest Price</small>
                    </div>
                </div>
                <div className='col-xm-12 col-sm-6 col-md-6 col-lg-3 d-flex'>
                    <div>
                        <img src={fourImg} alt="" />
                    </div>
                    <div className='ms-4'>
                        <p>Free Shipping</p>
                        <small>Easy to Return</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;