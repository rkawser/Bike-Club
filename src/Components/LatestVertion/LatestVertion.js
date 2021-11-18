import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LatestVertion.css';
const LatestVertion = () => {
    return (
        <div>
            <h2>Our Latest News</h2>
            <Container>
                <Row className='latest-size'>
                    <Col md={12}>
                        <Row>
                            <Col md={4}>
                                <div className='latest-image'>

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='text-size'>
                                    <h6>25, August 2020|1 Comments</h6>
                                    <h4>Change Gear on a Bicycle</h4>
                                    <p>Muis sed fringilla mauris sit amet nibh.
                                     Donec <br/> sodales sagittis magna. Sed consequat,
                                     leo eget bibendum sodales, augue velit cursus nunc,...</p>

                                     <button className='btn btn-size'>Read More </button>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className='latest-image-2'>
                            </div>
                            </Col>
                        </Row>
                    </Col>

               <div className='mt-5'>
               <Col md={12} >
                        <Row >
                            <Col md={4}>
                            <div className='text-size'>
                                    <h6>25, August 2020|1 Comments</h6>
                                    <h4>Cycling through The Night</h4>
                                    <p>Muis sed fringilla mauris sit amet nibh.
                                     Donec <br/> sodales sagittis magna. Sed consequat,
                                     leo eget bibendum sodales, augue velit cursus nunc,...</p>

                                     <button className='btn btn-size'>Read More </button>
                                </div>
                            </Col>

                            <Col md={4}>
                            <div className='latest-image-3'>
                            </div>
                            </Col>
                            <Col md={4}>
                            <div className='text-size'>
                                    <h6>25, August 2020|1 Comments</h6>
                                    <h4>Gear Cycle with Disk Brake</h4>
                                    <p>Muis sed fringilla mauris sit amet nibh.
                                     Donec <br/> sodales sagittis magna. Sed consequat,
                                     leo eget bibendum sodales, augue velit cursus nunc,...</p>

                                     <button className='btn btn-size'>Read More </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
               </div>
                </Row>
            </Container>
        </div>
    );
};

export default LatestVertion;