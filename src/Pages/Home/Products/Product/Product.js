import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { id, name, price, description, imgURL } = product;
    return (
        <div>
            <div>
                <div class="col mt-5">
                    <div class="card h-100">
                        <img className=" service-img mx-auto" src={imgURL} alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">{name.slice(0, 20)}</h5>
                            <p class="card-text">{description?.slice(0, 150)}</p>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-5 fw-bold text-danger"> $ {price}</span>
                                </div>
                                <div>
                                    <Link to={`/booking/${id}`}><button className="btn btn-outline-dark fw-bold btn-sm">Buy Now <i class="fas fa-cart-plus"></i></button></Link>
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