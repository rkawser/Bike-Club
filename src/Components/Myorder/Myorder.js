import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Myorder = ({orders,handleOrderDelete}) => {

    const{userName, image ,price, productName,status,_id}=orders


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

          <button className='btn btn-danger' onClick={()=> handleOrderDelete(_id)}>Cancel</button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Myorder;