import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row, Col, Container, FormControl, InputGroup } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div className="bg-dark py-5">
            <p className="text-white fs-3 text">Connect with our latest News</p>
            <Container className="d-flex justify-content-center bg-primary py-5 rounded">
                <Row xs={1} md={3}>
                    <Col>
                        <InputGroup className="">
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Email"
                            />
                        </InputGroup>
                    </Col>
                    <Col className="text-start">
                        <Button variant="primary" className="btn btn-dark align-start">Subscire Us</Button>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Subscribe;