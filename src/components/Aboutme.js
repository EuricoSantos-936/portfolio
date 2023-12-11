import React from 'react'
import '../pages/styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoBootstrap,BiLogoGithub, BiLogoReact } from 'react-icons/bi';
import { DiPhotoshop } from 'react-icons/di';
import Lottie from "lottie-react";
import animationData from '../assets/animation_lkcbwe51.json';


function Aboutpage() {
    return (
        <div className='aboutbackground'>
            <Container>
                <Row className='abouttextbackground'>
                    <Col md={7} >
                    <div className="aboutimage">
                        <Lottie animationData={animationData} />
                    </div>
                    </Col>
                    <Col md={5}>
                        <h3 className='abouttexttitle'>About Me</h3>
                        <p className='abouttext'>I'm a self-taught Web developer from Portugal. I'm looking to apply on any project, alone or on team, to learn and upgrade my skill, always offering the best service to the client.
                        </p>
                        <br />
                        <br />
                        <h3 className='skillstexttitle'>Skills</h3>
                        <ul className='skillstext'>
                        <Row>
                                <Col md={4}>
                                    <li><BiLogoHtml5 /> HTML</li>
                                    <li><BiLogoCss3 /> CSS</li>
                                    <li><BiLogoJavascript /> JavaScript</li>
                                    <li><BiLogoBootstrap /> Bootstrap</li>
                                </Col>
                                <Col md={6}>
                                    <li><BiLogoReact /> React Js</li>
                                    <li><BiLogoReact /> React-Bootstrap</li>
                                    <li><BiLogoGithub /> Git/Github</li>
                                    <li><DiPhotoshop /> Design with Photoshop</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Aboutpage
