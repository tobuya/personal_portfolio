import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, openDetail }) => {
  const {
    projectName, introduction, featuredImage,
  } = project;

  const handleOpenDetail = () => {
    openDetail(project);
  };

  return (
    <main>
      <div className="project-card">
        <h2 className="proj-title">{projectName}</h2>
        <img className="featured-image" src={featuredImage} alt={projectName} />
        <p>{introduction}</p>
        <button type="button" className="close-button" onClick={handleOpenDetail}>
          Read more ...
        </button>
      </div>
    </main>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  openDetail: PropTypes.func.isRequired,
};

export default ProjectCard;
