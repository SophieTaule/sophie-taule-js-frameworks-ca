import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from "./ContactForm";

export function Contact() {
    return (
        <div className="Contact">
            <Container>
                <h1 className="contact__title">Contact Page</h1>
                <ContactForm />
            </Container>
        </div>
    );
}

export default Contact;
