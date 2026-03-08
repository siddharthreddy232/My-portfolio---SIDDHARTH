import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a data-driven professional focused on using analytics to solve real business problems. From improving campaign targeting accuracy to reducing reporting time through SQL optimization, I’m passionate about delivering measurable impact through data.
              <br />
              <br />
              With experience in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, dashboards, and database systems{" "}
                </b>
              </i>
              , I enjoy bridging the gap between technical analysis and strategic decision-making.
              <br />
              <br />
              My interests include
              <i>
                <b className="purple">
                  {" "}
                  Business Intelligence, Performance Analytics, Cloud Data Systems,{" "}
                </b>
              </i>
              and AI-powered applications that enhance operational efficiency.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;