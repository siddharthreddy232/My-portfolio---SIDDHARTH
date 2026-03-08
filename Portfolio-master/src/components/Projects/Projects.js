import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Add these images inside src/Assets/Projects/
import recoverEase from "../../Assets/Projects/recoverEase.png";
import healthcareDB from "../../Assets/Projects/healthcareDB.png";
import nursingHome from "../../Assets/Projects/nursingHome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Recover Ease */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recoverEase}
              isBlog={false}
              title="Recover Ease – Deep Image Search System"
              description="Developed an AI-powered lost item recovery platform using TensorFlow, OpenCV, and Django. Implemented deep image similarity matching, backend integration with SQLite, and end-to-end testing to ensure a seamless and scalable user experience."
              ghLink="https://github.com/siddharthreddy232"
            />
          </Col>

          {/* Healthcare DB */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcareDB}
              isBlog={false}
              title="Healthcare Management Database System"
              description="Designed a fully normalized MySQL database system to manage hospital operations including patient records, billing, and appointments. Automated reporting using SQL and validated performance metrics using Python and Jupyter Notebook."
              ghLink="https://github.com/siddharthreddy232"
            />
          </Col>

          {/* Nursing Home Financial Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nursingHome}
              isBlog={false}
              title="Nursing Home Financial Analysis"
              description="Conducted financial performance analysis of a nursing home facility using data analytics techniques. Performed revenue, expense, and profitability evaluation using Python and Excel, delivering insights to support operational and financial decision-making."
              ghLink="https://github.com/siddharthreddy232/NursingHome-FinancialAnalysis"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;