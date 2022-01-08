import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
import one from '../../../../images/post/one.png'
import two from '../../../../images/post/two.png'
import three from '../../../../images/post/three.png'
import test from '../../../../images/testimonial/two.png'
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-hollows-47893.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8)))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 text-primary">Kids product</h1>
            </div>
            <div className='row container-fluid mx-auto'>
                {/* <div className='col-sm-12 col-lg-3 mt-5 featured-posts'>
                    <h5>Featured posts</h5>
                    <div className='d-flex feature-post feature-post-one'>
                        <div>
                            <img className='w-75' src={one} alt="" />
                        </div>
                        <div>
                            <small>Nov 6, 2021</small>
                            <Link to="/blog"><p>Bringing up children is a full time job!</p></Link>
                        </div>
                    </div>
                    <div className='d-flex feature-post feature-post-two'>
                        <div>
                            <img className='w-75' src={two} alt="" />
                        </div>
                        <div>
                            <small>Nov 6, 2021</small>
                            <Link to="blog"><p>Bringing up children is a full time job!</p></Link>
                        </div>
                    </div>
                    <div className='d-flex feature-post'>
                        <div>
                            <img className='w-75' src={three} alt="" />
                        </div>
                        <div>
                            <small>Nov 6, 2021</small>
                            <Link to="blog"><p>Bringing up children is a full time job!</p></Link>
                        </div>
                    </div>
                    <h5>Testimonials</h5>
                    <div className='text-center testimonial'>
                        <img className='w-25 test-img' src={test} alt="" />
                        <h6>John Aurongodev</h6>
                        <p className='px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, dicta ipsam soluta sapiente earum laboriosam. Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                </div> */}
                <div className=''>
                    <div>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 container-fluid mx-auto mb-5">
                            {
                                products.map(product => <Product
                                    product={product}
                                ></Product>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;