import React from 'react';
import './CustomerReviews.css'

const CustomerReviews = () => {
    return (
        <div className="container-fluid mx-auto">
            <h2 className="text-center mt-5 mb-5">Super Safe Standerd</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2 bg-dark text-light">
                        <div class="card-body">
                            <h3>Dermatologically Tested</h3>
                            <p class="card-text">We ensure each product is tested clinically on the sensitive human skin to ensure that it is not allergic.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2 bg-dark text-light">
                        <div class="card-body">
                            <h3>FDA Approved</h3>
                            <p class="card-text">MamaEarth is FDA approved, which means we are 100% safe to be used for babies as well as mamas.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2 bg-dark text-light">
                        <div class="card-body">
                            <h3>Made Safe Certified</h3>
                            <p class="card-text">The MADE SAFE (Made with Safe Ingredients™) seal means that a product is literally made with safe ingredients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;