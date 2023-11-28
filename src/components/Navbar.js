import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from 'react-router-dom';
import '../pages/styles.css';
import logoleft from '../assets/logoeurico_normal_left.png'

function Navigationbar() {
  
  return (
    <Navbar fixed="top" expand="md" id="navbar">
        <Navbar.Brand id="logo-brand" className="logo-brand" as={Link} to="/">
        <img className="logo" src={logoleft} width="150" height="55" alt="EuricoSantos"/>
        </Navbar.Brand>
      <Navbar.Toggle className="navbar-toggler" aria-controls="navbarScroll" data-bs-target="#navbarScroll"></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar text-center">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <NavLink className="nav-link nav-link-ltr" to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link nav-link-ltr" to="/about" >About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link nav-link-ltr" to="/projects">Projects</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link nav-link-ltr" to="/contact">Contact</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;