import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DisplayFeedback = ({reviews}) => {
    const {name,review,rating}=reviews;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {review}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default DisplayFeedback;