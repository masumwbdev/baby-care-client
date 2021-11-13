import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/explore', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Add product successfully');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <h2 className="text-center">Add product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                <input type="price" {...register("price")} placeholder="Total Cost" />
                <input {...register("imgURL")} placeholder="Image url" />
                <textarea {...register("description")} placeholder="Description" />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;