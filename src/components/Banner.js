import { Container, Row, Col } from 'react-bootstrap';
import header from '../assets/header-img.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';
import wave from '../assets/wave.png';

const Banner = () => (
  <section className="banner" id="home">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <div className="banner-content">
            <h1>
              Hi there
              {' '}
              <img src={wave} alt="Wave" />
              {' '}
              <br />
              I&apos;m Thomas Obuya
            </h1>
            <h2>Software Developer</h2>
            <p>
              Welcome to my portfolio!
              As a highly skilled and adaptable junior software developer,
              I specialize in Full-stack Web Development and Data Analysis.
              I possess a strong passion for creating impactful web applications
              and uncovering valuable insights from data.
              Let&apos;s collaborate and bring your project to life!
              Explore my work and discover how I can contribute to your success.
            </p>
            <div className="social-links social-icon">
              <a href="https://www.linkedin.com/in/tobuya/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/tobuya" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://medium.com/@tobuya" target="_blank" rel="noopener noreferrer">
                <img src={medium} alt="Medium" />
              </a>
            </div>
          </div>
        </Col>
        <Col xs={8} md={6} xl={5}>
          <img src={header} alt="Header" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Banner;
