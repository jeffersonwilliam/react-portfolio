import React from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.scss';

function Navigationbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-title-font">JEFFERSON  AKESSEH</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link as={NavLink}
              to="/education"
            >
              Education
            </Nav.Link>
            <Nav.Link as={NavLink}
              to="/work"
            >
              Work
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
