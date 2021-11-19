import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Link } from 'react-router-dom';
import LatestVertion from '../LatestVertion/LatestVertion';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    return (
        <>

            <div>
                <Carousel fade>

                    <Carousel.Item>
                        <Container fluid>
                            <Row className='banner-size'>
                                <Col md={7}>
                                    <div className='banner-1'>

                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className='banner-text'>
                                        <h2>Rides Made Better</h2>
                                        <h6>
                                            Believe in your cycle, and it will lead your way.
                                            The best rides <br /> happen on two wheels. Ride it like
                                            a pro it’s not just riding, it’s <br /> a feeling. Ride and live today.
                                        </h6>
                                        <Link to='/service'>
                                            <button className='btn px-5 btn-size'>Explore Now</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Container fluid>
                            <Row className='banner-size'>
                                <Col md={7}>
                                    <div className='banner-2'>

                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className='banner-text'>
                                        <h2>Love Every Ride</h2>
                                        <h6>
                                            Always back your scooter into the curb and sit where you can see it.
                                            The sound of the throttle makes me fall in love with our bike.
                                            King of the bikes
                                        </h6>
                                        <Link to='/service'>
                                            <button className='btn px-5 btn-size'>Explore Now</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container fluid>
                            <Row className='banner-size'>
                                <Col md={6}>
                                    <div className='banner-3'>

                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='banner-text'>
                                        <h2> Experience New Ride</h2>
                                        <h6>
                                            Four wheels move the body, and two wheels move the soul.
                                            If <br /> you have never owned one, you will never understand.
                                            A bike<br />  on the road is worth two in the shed.


                                        </h6>
                                        <Link to='/service'>
                                            <button className='btn px-5 btn-size'>Explore Now</button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='my-5'>
                <Product></Product>
            </div>
            <div>
                <LatestVertion></LatestVertion>
            </div>
            <div>
                <Feedback></Feedback>
            </div>
        </>
    );
};

export default Home;