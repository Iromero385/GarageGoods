import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => (
  <div>
    <Navbar id="navbar" fixedTop fluid>
      <Navbar.Header >
        <Navbar.Brand>
          <Link to="/home" >Garage Goods</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#" >
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Link to="/Search">Members</Link>
        </NavItem>
        <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}> <p style={{ color: "black" }}>My Post</p></MenuItem>
          <MenuItem eventKey={3.2}><p style={{ color: "black" }}>Create Post</p></MenuItem>
          <MenuItem eventKey={3.3}><p style={{ color: "black" }}>Something Here</p></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}><p style={{ color: "black" }}>Logout</p></MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

  </div>
);

export default Header;
