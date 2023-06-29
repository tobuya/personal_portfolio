import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col sm={6}>
          <img src={logo} alt="logo" />
        </Col>
        <Col sm={6} className="text-center text-sm-end">
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
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
