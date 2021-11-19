import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Products.css';
import {IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';



const Products = ({product}) => {
  const {name,img,description,price,_id,rating}=product;
    return (
        <Col >
      <Card className='card-style'>
        <Card.Img variant="top" src={img} className='img-fluid w-70 mx-auto'/>
        <Card.Body className='card-size'>
          <Card.Title>{name}</Card.Title>
          <div className='Cardtext-size'>
            <Card.Title>${price}</Card.Title>
            <Card.Title> {rating}<IoIosStar className='text-danger'/></Card.Title>
          </div>
          <Card.Text>
           {description}
          </Card.Text>
        <Link to={`/orders/${_id}`}>
        <button className='btn btn-info'>Buy now</button>
        </Link>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default Products;