import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container d-flex pt-4">
            <div className="logo" >
                <p className="fs-1 text fw-bold text-primary">IELTS CARE</p>
            </div>
            <div className="ms-auto fw-bold text-dark px-3">
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/services">SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/blogs">BLOGS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
                    </Nav.Item>

                </Nav>
            </div >
        </div >
    );
};

export default Header;