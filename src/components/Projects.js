/* eslint-disable global-require */
import {
  Container, Row,
} from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const backImg = require('../assets/front.jpg');

console.log(backImg.default);

const Projects = () => {
  const projects = [
    {
      projectName: 'E-Learning Academy',
      description: 'E-learning platform where users can reserve online classes to schedule study sessions with learners in their area.'
                       + 'By bridging the gap between virtual learning and real-world interactions, '
                       + 'ClassUp creates a vibrant and collaborative learning environment for students of all backgrounds.',
      // eslint-disable-next-line global-require
      featuredImage: backImg,
      technologies: ['React', 'Redux', 'Rails', 'PostgreSQL'],
      live: 'https://classup.onrender.com/',
      source: 'https://github.com/tobuya/e-learning-academy',
    },
    {
      projectName: 'Kitchen Genie',
      description: 'Kitchen Genie is a recipe sharing web app that helps home cooks find inspiration and get organized in the kitchen.',
      featuredImage: 'cardwork.svg',
      technologies: ['Rails', 'CSS', 'PostgreSQL'],
      live: 'https://tobuya.github.io/Portfolio/',
      source: 'https://github.com/tobuya/kitchen-genie',
    },
    {
      projectName: 'Budget Tracker',
      description: 'This application help users manage their budgets, users have a list transactions associated with a category so that they can see how much money they have spent and on what.',
      featuredImage: 'cardwork.svg',
      technologies: ['Rails', 'PostgreSQL', 'CSS'],
      live: 'https://tobuya.github.io/Portfolio/',
      source: 'https://github.com/tobuya/budget_tracker',
    },
    {
      projectName: 'Post Streams',
      description: 'This application show users a list of posts and empower them to interact with them by adding comments and liking posts',
      featuredImage: 'cardwork.svg',
      technologies: ['Rails', 'PostgreSQL', 'CSS'],
      live: 'https://tobuya.github.io/Portfolio/',
      source: 'https://github.com/tobuya/post_stream',
    },
    {
      projectName: 'Soccer Hub',
      description: 'This application uses ScoreBat API to allow users to watch recent official highlights of the Premier League, Champions League, La Liga, Serie A, Europa League and many more matches of your favorite football leagues.',
      featuredImage: 'cardwork.svg',
      technologies: ['React', 'Redux', 'CSS'],
      live: 'https://tobuya.github.io/Portfolio/',
      source: 'https://github.com/tobuya/kitchen-genie',
    },
    {
      projectName: 'Data Science Exhibition',
      description: 'This is a Capstone project about AI and Big Data Exhibition. Users can interact with the app and test its features.',
      featuredImage: 'cardwork.svg',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      live: 'https://tobuya.github.io/Portfolio/',
      source: 'https://github.com/tobuya/Data-Science-Exhibition',
    },
  ];

  return (
    <section id="projects" className="p-3 border border-danger">
      <h2 className="projects-headline">Projects</h2>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4">
          {projects.map((project, index) => {
            console.log('image');
            console.log(project.projectImage);

            return (
              <ProjectCard
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                projectName={project.projectName}
                description={project.description}
                featuredImg={project.featuredImage}
                technologies={project.technologies}
                live={project.live}
                source={project.source}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
