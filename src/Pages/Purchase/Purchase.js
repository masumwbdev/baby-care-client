import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

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
            <div className="text-center d-lg-flex mt-5">
                <div>
                    <img src={explore.imgURL} alt="" />
                </div>
                <div className="px-5 mt-5">
                    <h2 className="text-warning">About this product</h2>
                    <hr />
                    <h3>{explore.name}</h3>
                    <p>{explore.description}</p>
                </div>
            </div>
            <div>
                <div className="booking-container">
                    <h2 className="text-center">Book Now</h2>
                    <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 1000 })} defaultValue={user.displayName} />
                        <input {...register("email", { required: true, maxLength: 1000 })} defaultValue={user.email} />
                        <input {...register("title", { required: true, maxLength: 1000 })} defaultValue={explore.name} />
                        <input {...register("img", { required: true, maxLength: 1000 })} defaultValue={explore.imgURL} />
                        <input {...register("location", { required: true, maxLength: 100 })} placeholder="Where do you live?" />
                        <input {...register("job", { required: true, maxLength: 1000 })}
                            placeholder="What's your job?" />
                        <input className="submit" type="submit" value="Confirm" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;