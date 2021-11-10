import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('')
        .then(res => res.json)
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.map( product => <Product
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;