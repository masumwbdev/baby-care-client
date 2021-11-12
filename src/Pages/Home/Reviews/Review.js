import React from 'react';

const Review = ({ review }) => {
    const { _id, name, price, description } = review;
    return (
        <div>
            <p>{price}</p>
        </div>
    );
};

export default Review;