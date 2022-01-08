import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://intense-hollows-47893.herokuapp.com/add-reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5">Customer reviews</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container-fluid mx-auto mb-5">
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;