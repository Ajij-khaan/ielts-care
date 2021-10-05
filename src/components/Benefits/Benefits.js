import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Benefits.css'
const Benefits = (props) => {
    return (
        <div className="bg-light">
            <Container>
                <Row className="mt-5 py-5">
                    <Col className="benefitImg">
                        <img src={props.benefitImage} alt=""></img>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div>
                            <div>
                                <h1 className="text-uppercase text-start fs-3 text">Benefits of Learn From US</h1>
                            </div>
                            <p className="text-start mt-4">The IELTS Care creates opportunities for people worldwide by helping societies achieve change in education, leadership development, skills, the public sector, civil society and justice. Working closely with governments, donors and business, we deliver value for money solutions that are both effective and sustainable.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Benefits;