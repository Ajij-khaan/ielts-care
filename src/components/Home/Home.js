import React, { useEffect, useState } from 'react';
import { Row, } from 'react-bootstrap';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Home.css'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./FakeAllService.JSON')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const data2 = data.slice(0, 4);

    const headerImage = "http://www.thetahmid.com/themes/edulyn-v1.0/assets/images/about-2.jpg";

    return (
        <div>
            <div className="bg-light py-5">
                <HeaderBanner headerImage={headerImage}></HeaderBanner>
            </div>

            <div>
                <p className="text-center mt-5 pb-3 text-primary fs-1 text fw-bold">SERVICES</p>
            </div>

            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        data2.map(service => <ServiceCard key={data2.id} service={service}></ServiceCard>)
                    }
                </Row>
            </div>


        </div >
    );
};

export default Home;