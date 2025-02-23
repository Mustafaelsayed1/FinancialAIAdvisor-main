import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  return (
    <div className="Register-section">
      <Container>
        <Row>
          <Col>
            <h2 className="mission_title" style={{ textAlign: "center" }}>Take Control of Your Finances</h2>
            <p className="mission_description" style={{ textAlign: "center", width: "70%", margin: "auto", paddingBottom: "20px" }}>
              Register now to receive personalized financial advice, powered by
              AI. Achieve your financial goals with tailored recommendations and
              insights.
            </p>
            <Button className="getStarted" onClick={handleRegisterClick}>Get Started Today</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToActionSection;
