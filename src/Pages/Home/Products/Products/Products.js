import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-hollows-47893.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-center mt-5 text-primary">Kids product</h1>
            </div>
            <div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
            {
                products.map(product => <Product
                    product={product}
                ></Product>)
            }
        </div>
            </div>
        </div>
    );
};

export default Products;