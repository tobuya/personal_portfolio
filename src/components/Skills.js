import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoRedux } from 'react-icons/bi';
import { GiTeamUpgrade } from 'react-icons/gi';
import { FcCollaboration } from 'react-icons/fc';
import {
  SiJavascript, SiTailwindcss, SiMysql, SiPostgresql,
  SiRuby, SiRubyonrails, SiR, SiMicrosoftexcel, SiPandas,
  SiPowerbi, SiHeroku, SiNetlify, SiTypescript, SiNumpy,
} from 'react-icons/si';
import {
  FaReact, FaBootstrap, FaHtml5, FaCss3, FaPython, FaGit,
  FaGithub, FaChrome, FaSlack,
} from 'react-icons/fa';
import back from '../assets/back.jpg';
import front from '../assets/front.jpg';
import data from '../assets/data.jpg';
import colorSharp from '../assets/color-sharp.png';
import tools from '../assets/tools.png';

const Skills = () => {
  const responsive = {
    superLargeScreen: {
      breakpoint: { max: 6000, min: 3000 },
      items: 3,
    },
    largeScreen: {
      breakpoint: { max: 3000, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  const iconStyle = {
    color: 'gray',
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
                  <h5 className="success">Back-end Development</h5>
                  <div>
                    <SiRubyonrails size={50} style={iconStyle} />
                    <SiPostgresql size={50} style={iconStyle} />
                    <SiRuby size={50} style={iconStyle} />
                    <SiMysql size={50} style={iconStyle} />
                  </div>
                </div>
                <div className="item">
                  <img src={front} alt="Front-end" />
                  <h5 className="success">Front-end Development</h5>
                  <div>
                    <SiJavascript size={50} style={iconStyle} />
                    <FaReact size={50} style={iconStyle} />
                    <SiTypescript size={50} style={iconStyle} />
                    <FaBootstrap size={50} style={iconStyle} />
                    <BiLogoRedux size={50} style={iconStyle} />
                    <FaHtml5 size={50} style={iconStyle} />
                    <SiTailwindcss size={50} style={iconStyle} />
                    <FaCss3 size={50} style={iconStyle} />
                  </div>
                </div>
                <div className="item">
                  <img src={data} alt="Data analyst" />
                  <h5 className="success">Data Analysis</h5>
                  <div>
                    <SiR size={50} style={iconStyle} />
                    <FaPython size={50} style={iconStyle} />
                    <SiMysql size={50} style={iconStyle} />
                    <SiNumpy size={50} style={iconStyle} />
                    <SiPandas size={50} style={iconStyle} />
                    <SiMicrosoftexcel size={50} style={iconStyle} />
                    <SiPowerbi size={50} style={iconStyle} />
                  </div>
                </div>
                <div className="item">
                  <img src={tools} alt="Data analyst" />
                  <h5 className="success">Tools & Methods</h5>
                  <div>
                    <FaGithub size={50} style={iconStyle} />
                    <SiHeroku size={50} style={iconStyle} />
                    <FaGit size={50} style={iconStyle} />
                    <SiNetlify size={50} style={iconStyle} />
                    <FaChrome size={50} style={iconStyle} />
                    <GiTeamUpgrade size={50} style={iconStyle} />
                    <FcCollaboration size={50} style={iconStyle} />
                    <FaSlack size={50} style={iconStyle} />
                  </div>
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
