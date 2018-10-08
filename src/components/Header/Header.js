import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import React from "react";
import "./Header.css"

const Header = () => (
  <div>
    <Navbar id="navbar" fixedTop fluid>
  <Navbar.Header >
    <Navbar.Brand>
      <a href="#home">Garage Goods</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#" >
      <p>Home </p>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <p>Members </p>
    </NavItem>
    <NavDropdown  eventKey={3}  title="My Account" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>My Posts</MenuItem>
      <MenuItem eventKey={3.2}>Create Posts</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Logout</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    
  </div>
);

export default Header;
