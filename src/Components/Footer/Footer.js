import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5 footer-style'>
            <Container fluid>
                <Row className='footer-size'>
                    <Col md={3}>
                        <div>
                            <img src='./image/logo.png' className='w-50'/>
                            <h6>The simple, delicate and light design
                                 makes it comfortable for everyone.
                             </h6>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h2>Shop</h2>
                            <h6>Shopping</h6>
                            <h6>Bicycle</h6>
                            <h6>Bicycle Accessory</h6>
                            <h6>Helmet</h6>
                        </div>
                    </Col>
                    <Col md={3}>
                    <div>
                            <h2>About Us</h2>
                            <h6>Pagination</h6>
                            <h6>Terms & Conditions</h6>
                            <h6>Contact</h6>
                            <h6>Accessories</h6>
                            <h6>Term of use</h6>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div>
                            <h2>Infomation</h2>
                            <h6>Address</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Terms & Conditions</h6>
                            <h6>Products Return</h6>
                            <h6>Wholesale Policy</h6>
                    </div>
                   </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;