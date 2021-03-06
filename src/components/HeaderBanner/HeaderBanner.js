import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderBanner.css'

const HeaderBanner = (props) => {
    return (
        <div>
            <Container className="">
                <Row className="d-flex align-items-center">
                    <Col>
                        <div>
                            <div>
                                <h1 className="text-uppercase text-start fs-3 text">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h1>
                            </div>
                            <p className="text-start mt-4">The IELTS Care creates opportunities for people worldwide by helping societies achieve change in education, leadership development, skills, the public sector, civil society and justice. Working closely with governments, donors and business, we deliver value for money solutions that are both effective and sustainable.</p>
                        </div>
                    </Col>
                    <Col className="headerImg">
                        <img src={props.headerImage} alt=""></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderBanner;