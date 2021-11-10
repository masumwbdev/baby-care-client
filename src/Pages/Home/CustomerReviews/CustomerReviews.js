import React from 'react';
import './CustomerReviews.css'

const CustomerReviews = () => {
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-5">Our Happy Customers Reviews</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2">
                        <div class="card-body">
                            <p class="card-text">I use a number of Mamaearth products - Onion hair fall kit, body lotion and hair oil. I've had one of the best shopping experiences. The delivery was early and easy to track. The website is stable and smooth and easy to navigate. The payment gateway is also smooth and secure.</p>
                        </div>
                        <div className="d-flex ms-3 customer-reviews">
                            <div>
                                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                            </div>
                            <div className="ms-3 mt-2">
                                <h6>Rahul Alam</h6>
                                <div className="text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2">

                        <div class="card-body">
                            <p class="card-text">I wanted to use natural products for my baby and came across Mamaearth two years ago. And I am loving it. I use the Baby Shampoo, Toothpaste, Face Cream and I just love all of them. The website works perfectly. I would suggest you make an app also. Payment is secure and delivery was on time. This is the best brand in this category.</p>
                        </div>
                        <div className="d-flex ms-3 customer-reviews">
                            <div>
                                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                            </div>
                            <div className="ms-3 mt-2">
                                <h6>Rahul Alam</h6>
                                <div className="text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-0 shadow p-2">

                        <div class="card-body">
                            <p class="card-text">Mamaearth products are so good and natural. They make my skin and hair feel really healthy. I mostly use Ubtan Face Wash, which is great for tan removal. It is much better than other face washes. Whenever I need any skin or hair care products I buy it from Mamaearth.</p>
                        </div>
                        <div className="d-flex customer-reviews ms-3">
                            <div>
                                <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                            </div>
                            <div className="ms-3 mt-2">
                                <h6>Rahul Alam</h6>
                                <div className="text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;