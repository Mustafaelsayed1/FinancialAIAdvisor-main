import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/images/logo.png";
import "../styles/Home.css";
import MissionImage from '../../../assets/img/mission.jpg'

const StorytellingSection = () => (
  <Container className="storytelling-section" id="About us">
    <Row>

      <Col md={6}>
        <h2 className="mission_title" >Our Mission</h2>
        <p className="mission_description">
          We believe that everyone should have access to expert financial
          advice, no matter their background or financial status. That’s why we
          built an AI-powered platform to provide personalized, data-driven
          insights to help you manage your finances smarter and more
          efficiently.
        </p>
        <p className="mission_description">
          Our team of data scientists and financial experts combined their
          knowledge to create a tool that understands your financial goals and
          delivers actionable advice—from budgeting to investment strategies.
        </p>
        <p className="mission_description">
          This journey is about more than just technology; it's about empowering
          you to take charge of your financial future with confidence.
        </p>
        <p className="mission_description">
          Join us today, and start your path to financial freedom with AI on
          your side.
        </p>
      </Col>
      <Col md={6}>
        <img
          src={MissionImage}
          alt="AI Financial Advisor logo"
          style={{
            width: "90%", height: "auto", borderRadius: "30px", display: "block",
            marginLeft: "auto"
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default StorytellingSection;
