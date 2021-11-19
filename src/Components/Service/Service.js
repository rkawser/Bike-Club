import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Explpore from '../Explore/Explpore';


const Service = () => {
    const[explore,setExplore]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bicycles')
        .then(res=>res.json())
        .then(data=>setExplore(data))
    },[])
    return (
        <div>
            <h2>Best Bicycle</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    explore.map(explores=><Explpore explore={explores}></Explpore>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Service;