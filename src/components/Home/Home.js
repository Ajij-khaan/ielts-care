import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, CardGroup } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.css'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./FakeFourService.JSON')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])


    return (
        <div>
            <div className="bg-light py-5">
                <Container className="">
                    <Row className="mt-5 ">
                        <Col className="d-flex align-items-center">
                            <div>
                                <div>
                                    <h1 className="text-uppercase text-start fs-3 text">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h1>
                                </div>
                                <p className="text-start mt-4">The IELTS Care creates opportunities for people worldwide by helping societies achieve change in education, leadership development, skills, the public sector, civil society and justice. Working closely with governments, donors and business, we deliver value for money solutions that are both effective and sustainable.</p>
                            </div>
                        </Col>
                        <Col>
                            <img src="http://www.thetahmid.com/themes/edulyn-v1.0/assets/images/about-2.jpg"></img>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="container">


                <Row xs={1} md={2} className="g-4">
                    {
                        data.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </Row>


            </div>


        </div >
    );
};

export default Home;