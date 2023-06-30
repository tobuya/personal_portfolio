/* eslint-disable global-require */
import {
  Container, Row,
} from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const classUp = require('../assets/classup.png');
const kitchenGenie = require('../assets/genie.png');
const budgetTracker = require('../assets/tracker.png');
const spaceTravelers = require('../assets/space.png');
const soccerHub = require('../assets/soccer.png');
const dsExpo = require('../assets/mockup.png');

const Projects = () => {
  const projects = [
    {
      projectName: 'ClassUp: Seamless Online Learning Made Easy',
      description: 'Experience the convenience of ClassUp, an all-in-one online learning platform. Create an account, reserve classes, and connect with learners in your area. With ClassUp, you are in control.'
                    + ' Elevate your learning journey by scheduling study sessions, creating courses, and managing reservations. Discover a world of educational opportunities at your fingertips.',
      featuredImage: classUp,
      technologies: ['React', 'Redux', 'Rails', 'PostgreSQL', 'CSS'],
      live: 'https://classup.onrender.com/',
      source: 'https://github.com/tobuya/e-learning-academy',
    },
    {
      projectName: 'KitchenGenie: Elevate Your Culinary Journey',
      description: 'KitchenGenie is your recipe sharing and organization web app. Find inspiration, create recipes effortlessly, and connect with fellow food enthusiasts.'
      + ' Explore a vast collection of public recipes and easily generate a smart shopping list based on the ingredients you need. Simplify meal planning and stay organized in the kitchen.'
      + ' Sign up or log in to unlock exclusive features and join our passionate community of home cooks.',
      featuredImage: kitchenGenie,
      technologies: ['Rails', 'CSS', 'PostgreSQL'],
      live: 'https://kitchen-genie.onrender.com/',
      source: 'https://github.com/tobuya/kitchen-genie',
    },
    {
      projectName: 'Budget Tracker: Control Your Finances on the Go',
      description: 'Track, categorize, and manage your budget effortlessly with Budget Tracker. Take charge of your finances, easily create categories, add transactions, and gain insights into your spending.'
      + ' See where your money goes with a simple and intuitive interface. Monitor expenses by category and stay on top of your financial goals.'
      + ' Sign up or log in to access exclusive features and keep your financial information secure.',
      featuredImage: budgetTracker,
      technologies: ['Rails', 'PostgreSQL', 'CSS'],
      live: 'https://budget-tracker-cl27.onrender.com/',
      source: 'https://github.com/tobuya/budget_tracker',
    },
    {
      projectName: 'Space Travelers Hub: Explore, Book, Journey',
      description: 'Space Travelers Hub is a web application powered by real-time data from the SpaceX API. Users can book rockets and join selected space missions. Built with React, Redux, and React Bootstrap, it offers an immersive experience for space enthusiasts. Get ready to embark on exciting space adventures!',
      featuredImage: spaceTravelers,
      technologies: ['React', 'Redux', 'Bootstrap', 'CSS'],
      live: 'https://space-travelers-hub-ihk3.onrender.com/',
      source: 'https://github.com/tobuya/space_travelers_hub',
    },
    {
      projectName: 'Soccer Hub: Your Football Highlights Hub',
      description: 'Experience the best in football highlights with Soccer Hub. Watch recent official highlights from top leagues like Premier League, Champions League, La Liga, Serie A, Europa League, and more. Filter by competition, view all recent highlights, and click to watch your chosen match highlight. Never miss a moment of football action.',
      featuredImage: soccerHub,
      technologies: ['React', 'Redux', 'CSS'],
      live: 'https://soccer-hub.onrender.com/',
      source: 'https://github.com/tobuya/soccer_hub',
    },
    {
      projectName: 'The Data Science Exhibition',
      description: 'This Data Science Exhibition website showcases the use of HTML, CSS, and JavaScript, employing Flexbox and Grid for responsiveness. With interactive elements powered by JavaScript, users can explore the captivating world of data science. The website adapts seamlessly to different screen sizes and follows HTML5 semantics for proper structure. Experience the dynamic fusion of responsive design, interactivity, and data science in this captivating web project.',
      featuredImage: dsExpo,
      technologies: ['JavaScript', 'CSS', 'HTML'],
      live: 'https://tobuya.github.io/Data-Science-Exhibition/',
      source: 'https://github.com/tobuya/Data-Science-Exhibition',
    },
  ];

  return (
    <section id="projects" className="p-3">
      <h2 className="projects-headline">Projects</h2>
      <Container>
        <Row xs={1} sm={2} md={3} className="g-4">
          {projects.map((project, index) => (
            <ProjectCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              projectName={project.projectName}
              description={project.description}
              featuredImage={project.featuredImage}
              technologies={project.technologies}
              live={project.live}
              source={project.source}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
