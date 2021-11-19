import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Addproduct.css';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/bicycle',data)
        .then(res=>{
            console.log(res);
        })
        console.log(data);
    }

    
    return (
        <div>
            <Container>
            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder='name'/>
      <input {...register("description")} placeholder='description'/>
      <input  type="number"{...register("price")} placeholder='$Price'/>
      <input type="number" {...register("rating")} placeholder='rating'/>
      <input type="img" {...register("img")} placeholder='image' alt='' />
      <input type="submit" />
    </form>
            </Container>
        </div>
    );
};

export default AddProduct;