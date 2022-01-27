import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import SecondNav from '../../Shared/SecondNav/SecondNav';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores, setExplores] = useState([]);
    useEffect(() => {
        fetch('https://intense-hollows-47893.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <div>
            <div>
                <SecondNav></SecondNav>
                <Navbar></Navbar>
                <div className="products-cont pb-5 pt-5">
                    <div>
                        <h2 className="text-center text-dark">Kids product</h2>
                    </div>
                    <div>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1 container mx-auto mb-5">
                            {
                                explores.map(exp => <Explore
                                    exp={exp}
                                ></Explore>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Explores;