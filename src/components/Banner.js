import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import logo from '../assets/logo.svg';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Software Developer', 'Data Analyst'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-content">
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                {'Hi I\'m Thomas Obuya'}
                {' '}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I can help you build a product , feature or website.
                Look through some of my work and experience!
                If you like what you see and have a project you need coded,
                don’t hesitate to contact me.
              </p>
              <button type="button" onClick={() => console.log('connect')}>
                Let&apos;s connect
                {' '}
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logo} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
