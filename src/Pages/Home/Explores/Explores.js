import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores, setExplores] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 text-primary">Kids product</h1>
            </div>
            <div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
            {
                explores.map(exp => <Explore
                    exp={exp}
                ></Explore>)
            }
        </div>
            </div>
        </div>
    );
};

export default Explores;