import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";
// import logoblack from "../assets/images/logo-black.png";
import HeroImage from '../../../assets/img/hero.jpg'

const HeroSection = () => (
  <div className="hero-section">
    <Container style={{ width: "100%", padding: "0px", margin: "0px" }}>
      <Row style={{ width: "100%", margin: "0px", padding: "0px", boxsizing: "border-box" }}>
        <Col md={6}>
          <img
            className="hero-image"
            src={HeroImage}
            alt="Financial Advisor AI logo"
            style={{ width: "100%", height: "540px", borderRadius: "30px", objectFit: "cover", backgroundPostion: "center" }}
          />
        </Col>
        <Col md={6}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", height: "100%" }}>
            <h1 className="hero_title">Welcome to Your AI Financial Advisor</h1>
            <p className="hero_description">
              Your personal AI-driven financial expert: Budgeting, investment strategies, savings advice, and more—all tailored to your needs. Gain personalized insights, track your financial goals, and make informed decisions with ease.
            </p>
            <Button variant="dark" as={Link} to="/signup">
              Start Your Free Trial
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </div >
);

export default HeroSection;
