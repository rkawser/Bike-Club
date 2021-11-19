import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'
import useAuth from './../AuthProvider/UseAuth';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, setValue } = useForm();
    const history = useHistory();

     setValue('name', `${user.displayName}`)
     setValue('email', `${user.email}`)

    const onSubmit = data => {
        axios.post('http://localhost:5000/userReview', data)
            .then(res => {
                swal("Thanks!", "your review!", "success");
                history.push('/review')
            })
      
    }

    return (
        <div>
            <h2>Review page</h2>
            <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
                <input disabled {...register("name")} placeholder='name' />
                <input disabled {...register("email")} placeholder='name' />
                <textarea {...register("review")} placeholder='review' />
                <input type="number" {...register("rating")} placeholder='rating' />
                <input className='btn btn-success' type="submit" />

            </form>
        </div>
    );
};

export default Review;