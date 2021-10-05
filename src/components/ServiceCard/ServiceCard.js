import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {

    const { title, duration, description, image } = props.service;

    return (
        <div>
            <Card className="border border-1 border-primary bg-light shadow-sm ">
                <div className="text-center pt-3">
                    <Card.Img variant="top" src={image} className="imgSize" />
                </div>
                <Card.Body>
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-dark">Course Duration: {duration}</small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default ServiceCard;