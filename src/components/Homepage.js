import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Typewriter from "typewriter-effect";
import '../pages/styles.css';
import { PiGithubLogoBold,PiLinkedinLogoBold,PiEnvelopeSimpleOpenFill } from "react-icons/pi";
import Lottie from "lottie-react";
import animationData from "../assets/animation_lo4pd2il.json"
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="homepagebackground">
      <Helmet>
        <title>Welcome to Eurico Santos Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Eurico Santos. Discover his skills in cybersecurity, incident response, forensics, and more."
        />
        <meta
          name="keywords"
          content="Eurico Santos, portfolio, cybersecurity, incident response, SIEM, threat detection"
        />
      </Helmet>
      <Container>
        <Row className="justify-content-center text-light">
          <Col md={4}>
            <div className="">
              <Lottie animationData={animationData} />
            </div>
          </Col>
          <Col md={4}>
            <Col className="hometext">
              <h2>
                Hi! <br />
                I'm Eurico Santos
              </h2>
              <Typewriter
                options={{
                  strings: [
                    "Cybersecurity Analyst",
                    "Incident Response, SIEM and Threat Detection Specialist",
                    "Forensics Enthusiast",
                    "Learn, Analyze, Protect.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="btnsocial">
            <button
              onClick={() => {
                window.open("https://github.com/EuricoSantos-936");
              }}
              className="contactbtn"
            >
              <PiGithubLogoBold size={32} color="#64178a" weight="bold" />
            </button>

            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/eurico-santos-545b57109"
                );
              }}
              className="contactbtn"
            >
              <PiLinkedinLogoBold size={32} color="#64178a" weight="bold" />
            </button>
            <button
              onClick={() => {
                window.open("mailto:euricosantos_936@hotmail.com");
              }}
              className="contactbtn"
            >
              <PiEnvelopeSimpleOpenFill
                size={32}
                color="#64178a"
                weight="bold"
              />
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home