import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import back from '../assets/back.jpg';
import front from '../assets/front.jpg';
import data from '../assets/data.jpg';
import colorSharp from '../assets/color-sharp.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite className="skill-slider">
                <div className="item">
                  <img src={back} alt="Back-end" />
                  <h5>Back-end Development</h5>
                </div>
                <div className="item">
                  <img src={front} alt="Front-end" />
                  <h5>Front-end Development</h5>
                </div>
                <div className="item">
                  <img src={data} alt="Data analyst" />
                  <h5>Data Analyst</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

export default Skills;
