import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Detail.css'
import {IoIosStar } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAuth from './../AuthProvider/UseAuth';


const Details = () => {
    const{id}=useParams();
    const[detail,setDetail]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/bicycle/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))

        .catch(error=>{
            console.log(error.message);
        })
    },[id])
    

    const {name,img,price,rating,description}=detail;

    //hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const {user}=useAuth();
    return (
        <div>
            <Container>
                <Row className='detail-size'>
                    <Col md={6}>
                        <div>
                            <img src={img} className='img-fluid' alt=''/>
                            <h2>{name}</h2>
                            <div className='detail-text'>
                            <h4>${price}</h4>
                            <h4>{rating} <IoIosStar className='text-info'/> (review)</h4>                         
                            </div>
                            <h6>{description}</h6>
                        </div>
                    </Col>
                    <Col md={6}>

    <form className='confirm-form' onSubmit={handleSubmit(onSubmit)}>
     <input {...register("name")} value={user.displayName}/>
     <input {...register("email")} value={user.email}/>
     <input type="number" {...register("phoneNumber")} placeholder='Phone Number'/>
     <input {...register("addres")} placeholder='addres'/>
     <input type='date' {...register("date")}/>
      <input className='btn btn-success' type="submit" />
    </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;