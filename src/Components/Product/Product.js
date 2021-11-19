import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from '../Products/Products';

const Product = () => {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch('https://salty-refuge-18117.herokuapp.com/bicycle')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <h2>product page</h2>

            <Container>
            <Row xs={1} md={3} className="g-4">
                {
                    product.map(products=><Products key={products._id} product={products}></Products>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Product;