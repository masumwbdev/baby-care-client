import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const [explore, setExplore] = useState({})
    const { purchaseId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/explore/${purchaseId}`)
            .then(res => res.json())
            .then(data => setExplore(data))
    }, [])
    
    return (
        <div>
            <div className="text-center d-lg-flex mt-5">
                <div>
                    <img src={explore.imgURL} alt="" />
                </div>
                <div className="px-5 mt-5">
                    <h2 className="text-warning">About this product</h2>
                    <hr />
                    <h3>{explore.name}</h3>
                    <p>{explore.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Purchase;