import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark py-3 mt-5">
            <Container>
                <Row>
                    <Col className="imgSize">
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center ">
                        <div >
                            <Link to="/comingSoon" className="text-white d-block text-decoration-none">Course Details</Link>
                            <Link to="/blogs" className="text-white d-block text-decoration-none">Blogs</Link>
                            <Link to="/comingSoon" className="text-white d-block text-decoration-none">Privacy Policy</Link>
                            <Link to="/comingSoon" className="text-white d-block text-decoration-none">Career</Link>
                            <Link to="/contact" className="text-white d-block text-decoration-none">Contact Us</Link>
                        </div>
                    </Col>
                </Row>
                <p className="text-white">© 2000-2021 IELTS Care</p>

            </Container>
        </div>
    );
};

export default Footer;