import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark py-3 mt-5">
                <Row>
                    <Col>
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center ">
                        <div >
                            <Link to="/coming-soon" className="text-white d-block text-decoration-none">Course Details</Link>
                            <Link href="/coming-soon" className="text-white d-block text-decoration-none">Blogs</Link>
                            <Link href="/coming-soon" className="text-white d-block text-decoration-none">Privacy Policy</Link>
                            <Link href="/coming-soon" className="text-white d-block text-decoration-none">Career</Link>
                            <Link href="/coming-soon" className="text-white d-block text-decoration-none">Contact Us</Link>
                        </div>
                    </Col>

                </Row>

                <p className="text-white">© 2017-2020 IELTS Care</p>
            </div>
        </div>
    );
};

export default Footer;