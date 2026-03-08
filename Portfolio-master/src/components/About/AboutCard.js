import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Siddharth Reddy Maddi</span>{" "}
            from <span className="purple">Hyderabad, India</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Graduate Student</span> pursuing my{" "}
            <span className="purple">Master’s in Business Analytics</span> at{" "}
            <span className="purple">California State University, Northridge (CSUN)</span>.
            <br />
            <br />
            I’m passionate about using{" "}
            <span className="purple">data analytics, machine learning,</span>{" "}
            and <span className="purple">business intelligence</span> to solve
            real-world problems and drive impactful decisions.
            <br />
            <br />
            Outside of academics and projects, I enjoy exploring technologies
            and building solutions that combine analytics with intelligent systems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Data-Driven Applications 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Machine Learning & AI 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Interactive Dashboards 📈
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into decisions that drive real impact."
          </p>
          <footer className="blockquote-footer">
            Siddharth Reddy Maddi
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;