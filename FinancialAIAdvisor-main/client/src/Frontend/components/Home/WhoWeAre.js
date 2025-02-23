import React from "react";
import "../styles/Home.css";
import AboutUs from '../../../assets/img/about.png'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

const WhoWeAre = () => {
  return (
    <section id="WhoWeAre" className="section">
      <h2 className="mission_title" style={{ textAlign: "center" }}>Who We Are</h2>


      <div style={{ display: "flex", marginTop: "50px" }}>
        <img style={{ width: "50%" }} src={AboutUs} alt="" />
        <div style={{ width: "50%", padding: "20px", }}>
          <p className="mission_description">
            We are a team of financial experts and data scientists, united by a
            common goal: to provide everyone with access to intelligent financial
            advice. Our AI-based personal financial advisor is designed to make
            financial planning simple and accessible to all.
          </p>
          <p className="mission_description">
            By leveraging advanced machine learning algorithms and real-world
            financial expertise, we help users make informed decisions on budgeting,
            saving, and investing. Our platform is your trusted ally in achieving
            financial security.
          </p>
        </div>
      </div>


      <div style={{ width: "100%", marginTop: "50px" }}>
        <Marquee velocity={22} minScale={0.7} resetAfterTries={200}  >

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "110px" }}>
            <p className="percentage">87%</p>
            <p className="marquee_desc">Accuracy</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "110px" }}>
            <p className="percentage">92%</p>
            <p className="marquee_desc">Growth</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "110px" }}>
            <p className="percentage">75%</p>
            <p className="marquee_desc">Savings</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "110px " }}>
            <p className="percentage">80%</p>
            <p className="marquee_desc">Success</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "110px " }}>
            <p className="percentage">95%</p>
            <p className="marquee_desc">Trust</p>
          </div>
        </Marquee>
      </div >

    </section >
  );
};

export default WhoWeAre;
