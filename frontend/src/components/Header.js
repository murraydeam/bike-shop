import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar
      className="px-3"
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">Bike Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/cart"}>
              <Nav.Link>
                <i className="fas fa-shopping-cart mx-2"></i>Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Nav.Link href="/login">
                <i className="fas fa-user mx-2"></i>Login
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
