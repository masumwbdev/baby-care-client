import React from 'react';
import one from '../../../images/category/one.png'
import two from '../../../images/category/two.png'
import three from '../../../images/category/three.png'
import './MoreCategories.css'
import { Link } from 'react-router-dom';

const MoreCategories = () => {
    return (
        <div>
            <h2 className='mt-5 text-center mb-3 most-popular-heading'>Check out the most popular products</h2>
            <div className='container-fluid text-end row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                <div className='col '>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-around'>
                            <div className='text-center'>
                                <h6>Front tie Raised</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={one} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-around'>
                            <div className='text-center'>
                                <h6>Kashmir Willow</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={two} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='text-center'>
                                <h6>Deuter Tour Bag</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={three} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='text-center'>
                                <h6>Deuter Tour Bag</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={three} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='text-center'>
                                <h6>Deuter Tour Bag</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={three} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card more-products border-0 p-3">
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='text-center'>
                                <h6>Deuter Tour Bag</h6>
                                <Link to="/explore">
                                <button className='more-btn'>More</button></Link>
                            </div>
                            <div>
                                <img className='img-fluid w-50' src={three} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreCategories;