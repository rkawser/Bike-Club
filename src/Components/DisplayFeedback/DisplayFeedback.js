import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from './../AuthProvider/UseAuth';
import {MdStarRate } from "react-icons/md";
const DisplayFeedback = ({feedback}) => {
    const {name,review,rating}=feedback;
    const{user}=useAuth(); 
    
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src='https://www.marketing91.com/wp-content/uploads/2019/07/Importance-of-Corporate-Image-2.jpg'
         className='w-25 rounded-circle mx-auto' />
        <Card.Body className='review-text'>
          <div className='review-size'>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{rating}<MdStarRate className='text-danger'/> </Card.Title>
          </div>       
          <Card.Text>
           {review}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default DisplayFeedback;