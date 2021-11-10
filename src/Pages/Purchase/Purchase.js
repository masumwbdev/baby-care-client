import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const {purchaseId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${purchaseId}`)
        .then(res => res.json())
        .then(data => setPurchase(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Purchase;