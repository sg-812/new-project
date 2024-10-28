import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const name = "John Doe";
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Routing </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/about/${name}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/service-page">Service</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/outer-comp">Outer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
