import { faChalkboardTeacher, faStream, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Benefits.css'
const Benefits = (props) => {

    const course = <FontAwesomeIcon icon={faStream}></FontAwesomeIcon>
    const training = <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>
    const teacher = <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>


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
                            <div>
                                <p className="text-start mt-4">The IELTS Care creates opportunities for people worldwide by helping societies achieve change in education, leadership development, skills, the public sector, civil society and justice. Working closely with governments, donors and business, we deliver value for money solutions that are both effective and sustainable.</p>
                                <div className="d-flex justify-content-center mt-4">
                                    <div className="mx-3">
                                        <i className="fs-3 text text-primary ">{course}</i>
                                        <p>Professional Courses</p>
                                    </div>
                                    <div className="mx-3">
                                        <i className="fs-3 text text-primary">{training}</i>
                                        <p>Live Training</p>
                                    </div>
                                    <div className="mx-3">
                                        <i className="fs-3 text text-primary">{teacher}</i>
                                        <p>Expert Teacher</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/comingSoon" className="btn btn-primary mt-3"> Learn More</Link>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Benefits;