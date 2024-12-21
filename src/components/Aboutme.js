import React from 'react'
import '../pages/styles.css';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'
import {
  BiLogoReact,
  BiLogoPython,
  BiLogoInternetExplorer,
  BiLogoPocket,
  BiLogoMicrosoftTeams,
  BiLogoFlask,
  BiLogoEdge,
  BiLogoGit,
} from "react-icons/bi";
import Lottie from "lottie-react";
import animationData from '../assets/animation_lkcbwe51.json';

function Aboutpage() {
    return (
      <div className="aboutbackground">
        <Helmet>
          <title>About Eurico Santos</title>
          <meta
            name="description"
            content="Learn more about Eurico Santos, an aspiring cybersecurity professional with skills in SIEM, incident response, digital forensics, and Python."
          />
          <meta
            name="keywords"
            content="cybersecurity, SIEM, incident response, digital forensics, Python, React"
          />
        </Helmet>
        <Container>
          <Row className="abouttextbackground">
            <Col md={7}>
              <div className="aboutimage">
                <Lottie animationData={animationData} />
              </div>
            </Col>
            <Col md={5}>
              <h3 className="abouttexttitle">About Me</h3>
              <p className="abouttext">
                I am an aspiring cybersecurity professional, transitioning into
                this dynamic and critical field. My foundation in IT and Python
                scripting has prepared me to tackle challenges in threat
                detection, digital forensics, and incident response. Currently,
                I am focused on hands-on projects, exploring tools like SIEM,
                and earning certifications to grow my expertise in
                cybersecurity.
              </p>
              <br />
              <br />
              <h3 className="skillstexttitle">Skills</h3>
              <ul className="skillstext">
                <Row>
                  <Col md={6}>
                    <h4 className="skillstexttitle">Cybersecurity Areas</h4>
                    <ul className="skillstext">
                      <li>
                        <BiLogoMicrosoftTeams /> Threat Detection & SIEM
                      </li>
                      <li>
                        <BiLogoPocket /> Digital Forensics (Learning)
                      </li>
                      <li>
                        <BiLogoInternetExplorer /> Incident Response (Learning)
                      </li>
                      <li>
                        <BiLogoEdge /> Security Scripting
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h4 className="skillstexttitle">Technical Skills</h4>
                    <ul className="skillstext">
                      <li>
                        <BiLogoPython /> Python Scripting
                      </li>
                      <li>
                        <BiLogoReact /> React JS (Web Development)
                      </li>
                      <li>
                        <BiLogoGit /> Git & Version Control
                      </li>
                      <li>
                        <BiLogoFlask /> Linux & Shell Scripting
                      </li>
                    </ul>
                  </Col>
                </Row>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
}


export default Aboutpage
