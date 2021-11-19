import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Detail.css'
import { IoIosStar } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAuth from './../AuthProvider/UseAuth';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const Details = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [detail, setDetail] = useState({});

   const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/bicycle/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))

            .catch(error => {
                console.log(error.message);
            })
    }, [id])


    const { name, img, price, rating, description } = detail;

    //hook form
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/userOrders', data)
            .then(res => {
                swal("Good job!", "Order added successfully !", "success");
                history.push('/')
            })

    }


    setValue('userName', `${user.displayName}`)
    setValue('userEmail', `${user.email}`)
    setValue('image', `${img}`)
    setValue('productName', `${name}`)
    setValue('price', `${price}`)
    setValue('status', 'panding')


    return (
        <div>
            <Container>
                <Row className='detail-size'>
                    <Col md={6}>
                        <div>
                            <img src={img} className='img-fluid' alt='' />
                            <h2>{name}</h2>
                            <div className='detail-text'>
                                <h4>${price}</h4>
                                <h4>{rating} <IoIosStar className='text-info' /> (review)</h4>
                            </div>
                            <h6>{description}</h6>
                        </div>
                    </Col>
                    <Col md={6}>

                        <form className='confirm-form' onSubmit={handleSubmit(onSubmit)}>
                            <input disabled {...register("userName")} />
                            <input disabled {...register("userEmail")} />
                            <input className='d-none' disabled {...register("image")} />
                            <input className='d-none' disabled {...register("status")} />
                            <input disabled {...register("productName")} />
                            <input disabled {...register("price")} />
                            <input type="number" {...register("phoneNumber")} placeholder='Phone Number' />
                            <input {...register("addres")} placeholder='addres' />
                            <input type='date' {...register("date")} />
                            <input className='btn btn-success' type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;