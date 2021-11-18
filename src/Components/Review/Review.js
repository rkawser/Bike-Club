import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'
import useAuth from './../AuthProvider/UseAuth';
const Review = () => {

        const { register, handleSubmit } = useForm();
        const onSubmit = data => console.log(data);
        const {user}=useAuth();
    return (
        <div>
            <h2>Review page</h2>
  <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  placeholder='name' value={user.displayName}/>
      <textarea {...register("review")} placeholder='review'/>
      <input type="number" {...register("rating")} placeholder='rating'/>
      <input className='btn btn-success' type="submit" />

    </form>
        </div>
    );
};

export default Review;