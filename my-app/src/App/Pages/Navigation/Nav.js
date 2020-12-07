import React, { userContext } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/" className="Nav-Logo-Wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/MentorLogoTransBg.jpg`}
        alt="logo"
        id="logo"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link
            href="/Dashboard"
            activeClassName="navbar_link_active"
            className="navbar__link">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/DiscuissionPage"
            activeClassName="navbar_link_active"
            className="navbar__link">
            Discussion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/MessagePage"
            activeClassName="navbar_link_active"
            className="navbar__link">
            Message
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ProfilePage">
            <Button className="Nav-button" size="sm">
              Profile
            </Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/Login">
            <Button className="Nav-button" size="sm">
              Login
            </Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <Button className="Nav-button" size="sm">
              Log out
            </Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
