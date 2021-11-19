import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Myorder = ({orders}) => {

    const{userName, image ,price, productName,status}=orders
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>
           {productName}
          </Card.Text>
          <Card.Text>
            Price: ${price}
          </Card.Text>
          <Card.Text>
            Price: ${price}
          </Card.Text>
          <Card.Text>
            {status}
          </Card.Text>
          <button className='btn btn-danger'>Cancel</button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Myorder;