import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Myorder from '../Myorder/Myorder';
import useAuth from './../AuthProvider/UseAuth';

const MyOrders = () => {
    const[order,setOrder]=useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/userOrders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email])
    return (
        <div>
            <h2>My Orders page</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
              {
                  order.map(orders=><Myorder key={orders._id} orders={orders}></Myorder>)
              }
             </Row>
            </Container>
        </div>
    );
};

export default MyOrders;