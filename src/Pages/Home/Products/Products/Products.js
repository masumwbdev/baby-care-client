import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-hollows-47893.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8)))
    }, [])
    return (
        <div className="products-cont">
            <div className='width-control'>
                <div>
                    <h3 className="mt-5 pt-3 text-center kids-prod">Kids product</h3>
                </div>
                <div className='row'>
                    <div className=''>
                        <div>
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-0 mx-auto">
                                {
                                    products.map(product => <Product
                                        product={product}
                                    ></Product>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-5 mt-5">
                    <Link to="/explore">
                        <button className='view-all-products-btn'>View All Products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;