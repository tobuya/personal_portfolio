/* eslint-disable global-require */
import { React, useState } from 'react';
import {
  Container, Row,
} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const classUp = require('../assets/classup.png');
const kitchenGenie = require('../assets/genie.png');
const budgetTracker = require('../assets/tracker.png');
const spaceTravelers = require('../assets/space.png');
const soccerHub = require('../assets/sochub.png');
const dsExpo = require('../assets/mockup.png');

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetail = (project) => {
    setSelectedProject(project);
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      projectName: 'ClassUp',
      introduction: 'An interactive Full-stack web application that let users create an account, reserve, create, and delete courses. The API was built with Rails and the client with React and Redux.',
      projectFeatures: ['Login with a username and access all features', 'Reserve online classes according to preferred time and location', 'Browse list of available courses', 'View upcoming classes and reservations'],
      description: 'Experience the convenience of ClassUp, an all-in-one online learning platform. Create an account, reserve classes, and connect with learners in your area. With ClassUp, you are in control.'
                    + ' Elevate your learning journey by scheduling study sessions, creating courses, and managing reservations. Discover a world of educational opportunities at your fingertips.',
      featuredImage: classUp,
      technologies: ['React', 'Redux', 'Rails', 'PostgreSQL', 'Bootstrap'],
      live: 'https://classup.onrender.com/',
      source: 'https://github.com/tobuya/e-learning-academy',
    },
    {
      projectName: 'KitchenGenie',
      introduction: 'Ruby on Rails web app designed to assist home cooks in finding inspiration and improving organization in the kitchen.'
      + 'It offers a collection of recipes, an intuitive recipe editor, and a smart shopping list feature. The app utilizes PostgreSQL for database management and Devise for user authentication. RSpec is used for testing purposes.',
      projectFeatures: ['Create and share recipes easily', 'Browse through collection of public recipes', 'Generate shopping list based on the necessary ingredients', 'Sign up or log in to your account to access exclusive features'],
      description: 'KitchenGenie is your recipe sharing and organization web app. Find inspiration, create recipes effortlessly, and connect with fellow food enthusiasts.'
      + ' Explore a vast collection of public recipes and easily generate a smart shopping list based on the ingredients you need. Simplify meal planning and stay organized in the kitchen.'
      + ' Sign up or log in to unlock exclusive features and join our passionate community of home cooks.',
      featuredImage: kitchenGenie,
      technologies: ['Rails', 'CSS', 'PostgreSQL'],
      live: 'https://kitchen-genie.onrender.com/',
      source: 'https://github.com/tobuya/kitchen-genie',
    },
    {
      projectName: 'Budget Tracker',
      introduction: 'Ruby on Rails mobile web application that let users sign-up or login to manage their budgets by having a list of transactions associated with a category, and the amount spent on each transactions, on each categories and the total spending by the user.',
      projectFeatures: ['Easily create categories to track transactions', 'Introduce new transactions associated with a category', 'See money spent on each category', 'Sign up or log in to your account to access'],
      description: 'Track, categorize, and manage your budget effortlessly with Budget Tracker. Take charge of your finances, easily create categories, add transactions, and gain insights into your spending.'
      + ' See where your money goes with a simple and intuitive interface. Monitor expenses by category and stay on top of your financial goals.'
      + ' Sign up or log in to access exclusive features and keep your financial information secure.',
      featuredImage: budgetTracker,
      technologies: ['Rails', 'PostgreSQL', 'CSS'],
      live: 'https://budget-tracker-cl27.onrender.com/',
      source: 'https://github.com/tobuya/budget_tracker',
    },
    {
      projectName: 'Space Travelers Hub',
      introduction: 'A SpaceX-API powered web application built with React, Redux and React Bootstrap. It is based on real live rockets, dragons and missions data and users can reserve or book the services as well as view their reservations.',
      projectFeatures: ['Join selected space missions', 'Book rockets', 'Join selected space dragons', 'View reservations and bookings'],
      description: 'Space Travelers Hub is a web application powered by real-time data from the SpaceX API. Users can book rockets and join selected space missions. Built with React, Redux, and React Bootstrap, it offers an immersive experience for space enthusiasts. Get ready to embark on exciting space adventures!',
      featuredImage: spaceTravelers,
      technologies: ['React', 'Redux', 'Bootstrap', 'CSS'],
      live: 'https://space-travelers-hub-ihk3.onrender.com/',
      source: 'https://github.com/tobuya/space_travelers_hub',
    },
    {
      projectName: 'Soccer Hub',
      introduction: 'A React and Redux web application based on ScoreBat free video API data to display the official  football highlights of recent matches grouped by the football league names.',
      projectFeatures: ['Filter recent videos highlights by competition name', 'Display all recent highlights in the selected competition', 'Click on a highlight of choice to watch the official match highlight'],
      description: 'Experience the best in football highlights with Soccer Hub. Watch recent official highlights from top leagues like Premier League, Champions League, La Liga, Serie A, Europa League, and more. Filter by competition, view all recent highlights, and click to watch your chosen match highlight. Never miss a moment of football action.',
      featuredImage: soccerHub,
      technologies: ['React', 'Redux', 'Bootstrap'],
      live: 'https://soccer-hub.onrender.com/',
      source: 'https://github.com/tobuya/soccer_hub',
    },
    {
      projectName: 'The Data Science Exhibition',
      introduction: 'A simple mobile-first responsive and interactive promotional web application based on AI & Big Data Exhibition scheduled for Math lovers, Data engineers and Data scientists.',
      projectFeatures: ['Responsiveness', 'Interactivity'],
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
              project={project}
              openDetail={openDetail}
            />
          ))}
        </Row>
      </Container>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          closeDetail={closeDetail}
        />
      )}
    </section>
  );
};

export default Projects;
