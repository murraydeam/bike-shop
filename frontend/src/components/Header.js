import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link>
              <p className="navbar-brand">Bike Shop</p>
            </Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <p className="nav-link active">
                      <i className="fas fa-shopping-cart"></i>
                      Cart
                      <span className="visually-hidden">(current)</span>
                    </p>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <p className="nav-link">
                      <i className="fas fa-user"></i>
                      Login
                    </p>
                  </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
