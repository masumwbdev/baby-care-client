import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
import Footer from '../Shared/Footer/Footer';
import SecondNav from '../Shared/SecondNav/SecondNav';
import Navbar from '../Shared/Navbar/Navbar';

const Purchase = () => {
    const [explore, setExplore] = useState({})
    const { purchaseId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://intense-hollows-47893.herokuapp.com/explore/${purchaseId}`)
            .then(res => res.json())
            .then(data => setExplore(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://intense-hollows-47893.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Congrats!! booking successfully confirmed');
                    reset();
                }
            })
    };
    return (
        <div>
            <SecondNav></SecondNav>
            <Navbar></Navbar>
            <div>
                <div className='purchase-container'>
                    <div className="width-control row mt-5 align-items-center justify-content-between">
                        <div className="text-center mb-3 purchase-about-product"><span>Product Description</span></div>
                        <div className='col-xm-12 col-sm-12 col-lg-5'>
                            <img className='img-fluid' src={explore.imgURL} alt="" />
                        </div>
                        <div className='col-xm-12 col-sm-12 col-lg-7'>
                            <h5>{explore.name}</h5>
                            <p className='display-single-p'>{explore.description}</p>
                        </div>
                    </div>
                    <div>
                        <div className="booking-container">
                        <div className="mt-5 text-center pt-5 pb-4 mb-3 purchase-about-product"><span>Book your order</span></div>
                            <div className='width-container container-fluid mx-auto row'>
                                <div className='col-sm-12 col-lg-8 prchase-all-card'>
                                    <div className='row'>
                                        <div className='col-sm-12 col-lg-6 purch-single-card ms-3 h-100'>
                                            <h5> <span>1</span> Payment Method</h5>
                                            <hr />
                                            <p>Select a payment method</p>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label className='ms-1' for="html">Cash on Delivery</label><br />
                                            <input type="radio" id="css" name="fav_language" value="CSS" />
                                            <label className='ms-1' for="css">Online Delivery</label><br />
                                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                            <label className='ms-1' for="javascript">POS on Delivery</label>
                                        </div>
                                        <div className='col-sm-12 col-lg-6 purch-single-card h-100 ms-3'>
                                            <h5> <span>2</span> Delivery Method</h5>
                                            <hr />
                                            <p>Select a delivery method</p>
                                            <input type="radio" id="hm" name="hm_dl" value="hm1" />
                                            <label className='ms-1' for="hm">Home Delivery</label><br />
                                            <input type="radio" id="pick" name="pick_st" value="pick2" />
                                            <label className='ms-1' for="pick">Stoke pickout</label><br />
                                            <input type="radio" id="disc" name="disc_wt" value="disc3" />
                                            <label className='ms-1' for="disc">With Discount</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='order-overview ms-1'>
                                            <h5> <span>3</span> Order Overview</h5>
                                            <hr />
                                            <div className='row table-head'>
                                                <div className='col-sm-12 col-lg-6'>
                                                    <p>Product name</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>Unit price</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>Quentity</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>Total price</p>
                                                </div>
                                            </div>
                                            <div className='row mt-4'>
                                                <div className='col-sm-12 col-lg-6'>
                                                    <p>{explore.name}</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>$ {explore.price}</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>1</p>
                                                </div>
                                                <div className='col-sm-12 col-lg-2'>
                                                    <p>$ {explore.price}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-lg-4 purchase-form'>
                                    <h5 className='customer-info'> <span>4</span> Customer info</h5>
                                    <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='name-email'>
                                            <input className='input-name' {...register("name", { required: true, maxLength: 1000 })} defaultValue={user.displayName} />
                                            <input className='input-email' {...register("email", { required: true, maxLength: 1000 })} defaultValue={user.email} />
                                        </div>
                                        <input {...register("title", { required: true, maxLength: 1000 })} defaultValue={explore.name} />
                                        <input {...register("img", { required: true, maxLength: 1000 })} defaultValue={explore.imgURL} />
                                        <input {...register("number", { required: true, maxLength: 1000 })} placeholder='Mobile number *' />
                                        <input {...register("location", { required: true, maxLength: 100 })} placeholder="City name *" />
                                        <input {...register("job", { required: true, maxLength: 1000 })}
                                            placeholder="Zone *" />
                                        <input className="submit" type="submit" value="Confirm order" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;