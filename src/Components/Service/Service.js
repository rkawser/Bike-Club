import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Explpore from '../Explore/Explpore';


const Service = () => {
    const[explore,setExplore]=useState([]);
    useEffect(()=>{
        fetch('https://salty-refuge-18117.herokuapp.com/bicycles')
        .then(res=>res.json())
        .then(data=>setExplore(data))
    },[])
    return (
        <div>
            <h2>Best Bicycle</h2>
            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    explore.map(explores=><Explpore key={explores._id} explore={explores}></Explpore>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Service;