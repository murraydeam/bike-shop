import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <LinkContainer to="/home">
            <Nav.Link>
              <a class="navbar-brand">Bike Shop</a>
            </Nav.Link>
          </LinkContainer>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <a class="nav-link active">
                      <i className="fas fa-shopping-cart"></i>
                      Cart
                      <span class="visually-hidden">(current)</span>
                    </a>
                  </Nav.Link>
                </LinkContainer>
              </li>
              <li class="nav-item">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <a class="nav-link">
                      <i className="fas fa-user"></i>
                      Login
                    </a>
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
