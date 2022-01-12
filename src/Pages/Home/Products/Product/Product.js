import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, description, imgURL } = product;
    return (
        <div>
            <div>
                <div class="width-control col mt-5 product-container">
                    <div class="card h-100 product-card rounded-0">
                        <div className="product-image">
                            <img className=" service-img mx-auto" src={imgURL} alt="..." />
                        </div>
                        <button className='in-stoke'>In Stoke</button>
                        <div class="card-body h-100 text-center product-card-item">
                            <Link className='product-title' to={`/purchase/${_id}`}><p class="card-title">{name.slice(0, 20)}</p></Link>
                            <span className="see-more-link">{description.slice(0,40)}... <br /> <Link to={`/purchase/${_id}`}><span>See more</span></Link></span>
                            <hr />
                            <div className='product-price mb-2'>
                                <span className="fs-6 fw-bold"> $ {price}</span>
                            </div>
                            <div>
                                <Link to={`/purchase/${_id}`}><button className="add-cart-btn"><i class="fas fa-cart-plus"></i> Buy now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;