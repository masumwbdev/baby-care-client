import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, description, imgURL } = product;
    return (
        <div>
            <div>
                <div class="col mt-5 product-container">
                    <div class="card h-100 product-card rounded-0">
                        <Link to={`/purchase/${_id}`}><img className=" service-img mx-auto" src={imgURL} alt="..." /></Link>
                        <button className='in-stoke'>In Stoke</button>
                        <div className='hover-awesome'>
                            <div>
                                <i class="far fa-heart this-icon fs-6"></i>
                            </div>
                            <div>
                                <i class="fas fa-compress-alt fs-6 this-icon"></i>
                            </div>
                            <div>
                                <i class="fas fa-search-plus fs-6 this-icon"></i>
                            </div>
                            <div>
                                <Link to={`/purchase/${_id}`}><i class="fas fa-cart-plus fs-6 this-icon"></i></Link>
                            </div>
                        </div>
                        <div class="card-body text-center product-card-item">
                            <Link className='product-title' to={`/purchase/${_id}`}><p class="card-title">{name.slice(0, 20)}</p></Link>
                            {/* <p class="card-text">{description?.slice(0, 150)}</p> */}
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-6 fw-bold"> $ {price}</span>
                                </div>
                                <div>
                                    <Link to={`/purchase/${_id}`}><button className="add-cart-btn">Add <i class="fas fa-cart-plus"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;