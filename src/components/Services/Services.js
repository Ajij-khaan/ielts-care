import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./FakeAllService.JSON')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    return (
        <div>
            <div>
                <p className="text-center mt-5 pb-3 text-primary fs-1 text fw-bold">ALL SERVICES</p>
            </div>

            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        data.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;