import React from 'react';
import "./Facilities.css"

const Facilities = () => {
    return (
        <div className='row container text-center facilities-container mx-auto mt-5'>
            <div className='col-sm-12 col-md-6 col-lg-4 facilities border-p'>
                <p><i class="fas fa-shopping-basket"></i> Non-contact shipping</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 facilities border-p'>
                <p>
                   <i class="fas fa-truck"></i> Free delivery for order over $100
                </p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 facilities'>
                <p><i class="fas fa-money-check-alt"></i> 100% Money back</p>
            </div>
        </div>
    );
};

export default Facilities;