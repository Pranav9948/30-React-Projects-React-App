import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
 import {Route, Routes, Link} from "react-router-dom"

function Navbarz() {

  return (
    <Navbar bg="warning" expand="lg" className="p-4">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="/" style={{ color: "white" }} className="fs-1">
            USECONTEXT ECOMMERCE
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Nav className="ms-4 fs-3" style={{ color: "white" }}>
                Products
              </Nav>
            </Link>

            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Nav className="ms-4 fs-3" style={{ color: "white" }}>
                Cart
              </Nav>
            </Link>
            <Nav
              href="#home"
              className="ms-4 fs-3"
              style={{ color: "white" }}
            >
              signIn
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default Navbarz