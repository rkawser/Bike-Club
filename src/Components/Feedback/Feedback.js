import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayFeedback from '../DisplayFeedback/DisplayFeedback';

const Feedback = () => {
    const[review,setReview]=useState([]);

    useEffect(()=>{
        fetch('https://salty-refuge-18117.herokuapp.com/userReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <h2>feedback page</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
            {
                review.map(feedback=><DisplayFeedback feedback={feedback}></DisplayFeedback>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Feedback;