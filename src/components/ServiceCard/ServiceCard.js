import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const ServiceCard = (props) => {

    const { title, duration, description, image } = props.service;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <i className={image}></i>
                <Card.Body>
                    <Card.Title>{title}}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{duration}</small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default ServiceCard;