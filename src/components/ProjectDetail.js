import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ProjectDetail = ({ project, closeDetail }) => {
  const {
    projectName, description, featuredImage, technologies, projectFeatures, live, source,
  } = project;

  return (
    <main className="project-detail-overlay">
      <div className="project-detail">
        <h2>{projectName}</h2>
        <div className="project-img-desc">
          <img src={featuredImage} alt={projectName} />
          <p>{description}</p>
        </div>

        <div className="project-stack-feat">
          <div>
            <h5>Stack Used:</h5>
            <ul>
              {technologies.map((technology) => (
                <li key={uuidv4()}>{technology}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Project Features:</h5>
            <ul>
              {projectFeatures.map((feature) => (
                <li key={uuidv4()}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-links">
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </div>

        <button type="button" className="close-button" onClick={closeDetail}>
          X
        </button>
      </div>
    </main>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  closeDetail: PropTypes.func.isRequired,
};

export default ProjectDetail;
