import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

function Pages({ loggedInUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Navbar>
        {/* this is the logo section. Dont touch */}
        <div className="header">
          <div className="smile">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/c5/c6/6cc5c650-a335-27f9-d064-882786a31329/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg"
              style={{ width: "60px", height: "60px" }}
              alt="smiley red dot"
            ></img>
          </div>
          <div className="right-logo">
            <h1>Learn Japanese</h1>
          </div>
        </div>
        {/* end of logo section */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/flashCardsContainer">
            Flash Cards
          </Nav.Link>
          <Nav.Link as={Link} to="/quizContainer">
            Quiz
          </Nav.Link>
          <Nav.Link as={Link} to="/Resource">
            Bonus Resources
          </Nav.Link>
        </Nav>
        <p> Welcome {loggedInUser != null ? loggedInUser.UserName : "?"}</p>
        <Nav>
          <NavDropdown
            title={loggedInUser && loggedInUser.UserName}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Pages;
