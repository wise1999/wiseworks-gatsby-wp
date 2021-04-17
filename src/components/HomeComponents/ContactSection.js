import React from 'react';
import ContactForm from '../HomeComponents/ContactForm';


const ContactSection = () => {
    return <>
        <section className="page-section" id="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className="divider">Contact me</span>
                        <h2>Wanna work with me?</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default ContactSection