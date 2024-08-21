import React, { useState } from 'react';
import Heading from '../components/common/Heading';
import Paragraph from '../components/common/Paragraph';
import Container from '../components/common/Container';
import Form from '../components/common/Form';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // submission logic 
  };

  const fields = [
    { label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text', placeholder: 'Enter your name' },
    { label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email', placeholder: 'Enter your email' },
    { label: 'Message', value: message, onChange: (e) => setMessage(e.target.value), type: 'textarea', placeholder: 'Enter your message' },
  ];

  return (
    <Container>
      <Heading level={1} text="Contact Us" />
      <Paragraph text="If you have any questions, please don't hesitate to reach out to us through the form below." />
      <Form onSubmit={handleSubmit} fields={fields} buttonLabel="Send Message" />
    </Container>
  );
}

export default ContactUs;
