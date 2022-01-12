import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import footerImg from '../../../images/footer/footer.png'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='row width-control mt-5 sub-footer'>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h5>Need help</h5>
                    <h4>88923 091 - CARE - 000</h4>
                    <p>Monday – Friday: 9:00-20:00</p>
                    <p>Saturday: 11:00 – 15:00</p>
                    <button className='email-btn'><i class="far fa-envelope"></i> baby@care.com</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <p>1487 Rocky Horse Carrefour <br />Arlington, TX 16819</p>
                    <a className='show-map' href="">Show on map</a>
                    <div className='mt-3'>
                    <i class="fab fa-linkedin me-3 fs-4"></i>
                    <i class="fab fa-twitter-square me-3 fs-4"></i>
                    <i class="fab fa-facebook-square me-3 fs-4"></i>
                    <i class="fab fa-youtube-square me-3 fs-4"></i>
                    <i class="fab fa-instagram-square fs-4"></i>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h4>Join our newsletter</h4>
                    <p>And get $20 discount for your first order</p>
                    <input className='me-2' type="email" placeholder='Enter email address' />
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
            <div className='row width-control mt-5 end-footer'>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <ul>
                        <li>About us</li>
                        <li>Delivery info</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <ul>
                        <li>Affiliate</li>
                        <li>Sales</li>
                        <li>Term</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <ul>
                        <li>Best seller</li>
                        <li>Discount</li>
                        <li>Latest price</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <ul>
                        <li>My account</li>
                        <li>My order</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>
                    <ul>
                        <li>Shipping</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-2'>

                </div>
            </div>
            <div className='copyright container d-lg-flex justify-content-between align-items-center mt-3 pb-2'>
                <div>
                    <p>Copyright © 2021 Baby Care. All Rights Reserved</p>
                </div>
                <div>
                    <img src={footerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;