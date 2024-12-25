import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat_app from "../../Assets/Projects/chat_app.png";
import password_manager from "../../Assets/Projects/password_manager.png";
import f1_website from "../../Assets/Projects/f1_website.png";
import keepers_app from "../../Assets/Projects/keepers_app.png";
import e_commerce from "../../Assets/Projects/e_commerce.png";
import spam_checker from "../../Assets/Projects/spam_checker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few of my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_app}
              isBlog={false}
              title="Chat Application"
              description="A real-time chat application developed using React.js and Firebase, enabling users to connect and communicate seamlessly. The app supports adding and managing contacts, sending and receiving messages, and displaying chat histories with timestamps. Features include user authentication, error handling, and a responsive user interface. This project showcases skills in state management with hooks, effective use of Firebase services, and dynamic rendering based on user interactions."
              ghLink="https://github.com/RisheshG/Chat-App"
              demoLink="https://chat-app-lovat-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password_manager}
              isBlog={false}
              title="Password Manager"
              description="A secure password management application developed using React.js and Firebase, enabling users to efficiently store, retrieve, and manage their passwords. The app features user authentication through Firebase, allowing only registered users to access their passwords. It includes functionality for adding, deleting, and searching for passwords by service name, ensuring easy access and management of sensitive information. The application also implements clipboard functionality for copying passwords securely."
              ghLink="https://github.com/RisheshG/Password-Manager"
              demoLink="https://password-manager-gray.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1_website}
              isBlog={false}
              title="F1 Insights"
              description="A comprehensive Formula 1 platform built with React.js, featuring multiple routes for fans to explore specific data related to drivers, cars, pits, races, and more. Each section is designed to deliver real-time updates and in-depth analysis, enhancing user engagement through features such as live feed integration, team radio messages, and session information. It has call-to-action for integration documentation for the developers to integrate."
              ghLink="https://github.com/RisheshG/F1-Website"
              demoLink="https://f1-website-psi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepers_app}
              isBlog={false}
              title="Keepers App"
              description="A simple and intuitive note-taking application built with React.js, allowing users to create, view, and delete notes seamlessly. The app features a header and footer for enhanced navigation, with a dedicated area for creating new notes. Users can easily manage their notes through an interactive interface, which updates in real time to reflect any changes made. This application demonstrates proficiency in state management using hooks, ensuring a responsive and user-friendly experience."
              ghLink="https://github.com/RisheshG/Keeper-App"
              demoLink="https://keeper-app-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_aggregator}
              isBlog={false}
              title="News Aggregator"
              description="A dynamic news aggregation component built with React.js and Axios, featuring Firebase authentication. This application allows users to browse news articles across various categories such as Technology, Sports, Business, and more. It supports real-time article fetching, a search feature for customized queries, and a modal view for detailed article information. Users can easily log out and switch categories to access the latest news updates seamlessly."
              ghLink="https://github.com/RisheshG/News-Aggregator"
              demoLink="https://news-aggregator-tawny.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam_checker}
              isBlog={false}
              title="Spam Checker"
              description="A web application component designed to analyze text for spammy words and phrases, built with React.js, Material-UI, and a RESTful API. It features a user-friendly interface for entering content, real-time spam analysis, and a responsive result display. Users can easily check their text for spammy language and receive instant feedback."
              ghLink="https://github.com/RisheshG/Spam-Words-Checker"
              demoLink="https://spam-words-checker.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
