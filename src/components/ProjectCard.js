import React from 'react';
// import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProjectCard = ({
  projectName, description, featuredImage, technologies, live, source,
}) => {
  // eslint-disable-next-line no-unused-vars
  const backgroundStyle = {
    backgroundImage: `url(${featuredImage})`,
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" style={{ backgroundImage: `url(${featuredImage})` }}>
        <h3 className="proj-title">{projectName}</h3>
        <p>{description}</p>
        <ul className="proj-technologies">
          {technologies.map((technology) => (
            <li key={uuidv4()}>{technology}</li>
          ))}
        </ul>
        <div className="btn-live-source-container">
          <Button variant="secondary" href={live} target="_blank" rel="noopener noreferrer">
            Live
          </Button>
          <Button variant="secondary" href={source} target="_blank" rel="noopener noreferrer">
            Source
          </Button>
        </div>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ProjectCard;
