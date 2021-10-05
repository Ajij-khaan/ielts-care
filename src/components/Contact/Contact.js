import { faEnvelopeOpen, faPhoneAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {

    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    const email = <FontAwesomeIcon icon={faEnvelopeOpen} />
    const website = <FontAwesomeIcon icon={faWifi} />
    return (
        <div>
            <div className="bg-light my-5">
                <div>
                    <p className="text-center mt-5 pb-3 text-primary fs-1 text fw-bold pt-3">CONTACT US</p>
                </div>
                <div className="container pb-5">
                    <p className="fs-3 text fw-bold">
                        We are ready to serve.
                    </p>
                    <div>
                        <p>{phone}</p>
                        <p>+8801742824576</p>
                    </div>
                    <div>
                        <p>{email}</p>
                        <p>hi@ieltscare.com</p>
                    </div>
                    <div>
                        <p>{website}</p>
                        <p>www.ieltscare.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;