import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import contactImg from '../assets/contact-img.svg';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: result.message });
      } else {
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    } finally {
      setButtonText('Send');
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6} id="contact">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea rows={6} value={formDetails.message} placeholder="Enter Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
