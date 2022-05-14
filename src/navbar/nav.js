import React, { useState } from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../style.scss';

function Navigationbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-title-font" onClick={() => setTimeout(() => { setExpanded(false); }, 150)}>JEFFERSON  AKESSEH</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink}
              to="/about"
              onClick={() => setTimeout(() => { setExpanded(false); }, 150)}
            >
              About
            </Nav.Link>
            <Nav.Link as={NavLink}
              to="/education"
              onClick={() => setTimeout(() => { setExpanded(false); }, 150)}
            >
              Education
            </Nav.Link>
            <Nav.Link as={NavLink}
              to="/work"
              onClick={() => setTimeout(() => { setExpanded(false); }, 150)}
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
