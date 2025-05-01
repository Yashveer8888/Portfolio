import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crypto DashBoard"
              description="Crypto DashBoard is a responsive and interactive cryptocurrency tracking dashboard built using React.js, fetching real-time market data from the CoinGecko API. It allows users to explore up-to-date information on thousands of cryptocurrencies, including prices, market caps, 24h changes, and more."
              ghLink="https://github.com/Yashveer8888/Crypto-Dashboard"
              demoLink="https://yashcrypto.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ChatBot"
              description="ChatBot is an intelligent, real-time conversational assistant built using React.js and powered by modern AI APIs. It provides a seamless interface for users to ask questions and receive dynamic responses instantly, mimicking natural human conversation."
              ghLink="https://github.com/Yashveer8888/ChatBot"
              demoLink="https://chatbot-qfag.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Heart Disease Prediction"
              description="The Heart Disease Prediction Web App is a machine learning-powered tool that allows users to assess their risk of heart disease based on key health metrics such as age, blood pressure, cholesterol levels, and more. Built with a Flask backend and a trained scikit-learn model, the app provides instant predictions in a user-friendly interface. It is designed to demonstrate how AI can assist in preventive healthcare by offering quick, accessible insights."
              ghLink="https://github.com/Yashveer888/Heart-Disease"
              demoLink="https://heart-disease-u415.onrender.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
