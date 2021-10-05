import React, { useEffect, useState } from 'react';
import { Row, } from 'react-bootstrap';
import Benefits from '../Benefits/Benefits';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import ServiceCard from '../ServiceCard/ServiceCard';


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./FakeAllService.JSON')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const data2 = data.slice(0, 4);

    const headerImage = "https://image.freepik.com/free-photo/male-teacher-doing-english-lesson-online-his-students_23-2148963021.jpg";

    const benefitImage = "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online_23-2148963005.jpg?size=626&ext=jpg";

    return (
        <div>
            <div className="bg-light d-flex justify-content-center align-items-center py-5">
                <HeaderBanner headerImage={headerImage}></HeaderBanner>
            </div>

            <div>
                <p className="text-center mt-4 pb-3 text-primary fs-1 text fw-bold">SERVICES</p>
            </div>

            <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {
                        data2.map(service => <ServiceCard key={data2.id} service={service}></ServiceCard>)
                    }
                </Row>
            </div>

            <div>
                <Benefits benefitImage={benefitImage}></Benefits>
            </div>

        </div >
    );
};

export default Home;