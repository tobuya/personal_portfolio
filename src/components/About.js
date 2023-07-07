import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const openResume = () => {
    window.open('https://docs.google.com/document/d/1NsEh-bq9mORTfyU9xAwARIvYAUX3jVlDWePB4nUKt30/export?format=pdf', '_blank');
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={12}>
            <h2>About Me</h2>
            <p>
              As a Full-stack Web Developer and Data Analyst,
              I am passionate about technology and its potential to drive innovation.
              With a strong foundation in both web development and data analysis,
              I bring a unique perspective to every project I work on.
            </p>
            <p>
              Adapting to new technologies is one of my strengths.
              I thrive in dynamic environments and love exploring new tools and frameworks.
              Whether it&apos;s building scalable web applications or analyzing complex datasets,
              I&apos;m always up for a challenge.
            </p>
            <p>
              I believe in lifelong learning and constantly strive to expand my skillset.
              Staying up-to-date with the latest industry trends and
              best practices is important to me, as it allows me to
              deliver high-quality solutions that meet the needs of modern businesses.
            </p>
            <div className="button-container">
              <button type="button" onClick={openResume} className="resume">Get My Resume</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
