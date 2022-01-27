import { Rating } from '@mui/material';
import React from 'react';
import user from '../../../images/user/user.png'
import './Review.css'

const Review = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div>
            <div class="col width-control review-user-container">
                <div class="card h-100 p-2">
                    <div class="card-body">
                        <p class="card-text">{description?.slice(0,170)}</p>
                    </div>
                    <div className="d-flex ms-3 customer-reviews">
                        <div>
                            <img src={user} class="card-img-top" alt="..." />
                        </div>
                        <div className="ms-3 mt-2">
                            <h6>{name}</h6>
                            <div>
                                <Rating name="read-only" value={rating} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;