import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarMenu() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand className="fw-light" href="#home">SHOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className=" fw-light mx-2 page-link text-primary" to="/">Products</NavLink>
            <NavLink className="fw-light mx-2 page-link text-primary" to="/addProduct">Add product</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
