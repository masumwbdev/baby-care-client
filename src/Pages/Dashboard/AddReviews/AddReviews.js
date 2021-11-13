import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddReviews.css'

const AddReviews = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://intense-hollows-47893.herokuapp.com/add-reviews', data)
            .then(res => {
                // console.log(res)
                if(res.data.insertedId){
                    alert('Rating added successfully. Thanks for your feedback!');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <h2 className="text-center">Add a packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} defaultValue={user.displayName} placeholder="Name" />
                <input type="number" min='0' max='5' {...register("rating", { required: true, maxLength: 5 })} placeholder="Rating" />
                <textarea {...register("description")} placeholder="Description" />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddReviews;