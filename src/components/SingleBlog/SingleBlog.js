import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleBlog.css'

const SingleBlog = (props) => {

    const { title, category, author, image } = props.singleBlog;

    return (
        <div>
            <Col>
                <Card>
                    <div className="d-flex">
                        <div>
                            <Card.Img variant="top" src={image} className="imgSize" />
                        </div>
                        <div className="text-start bg-light shadow-sm">
                            <Card.Body>
                                <Card.Title className="fs-6 text">{category}</Card.Title>
                                <Card.Title className="mt-4">{title}</Card.Title>
                                <Card.Text className="mt-3">
                                    By:{author}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default SingleBlog;