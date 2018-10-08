
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import React from "react";

const Header = () => (
  <div>
    <Navbar style={{backgroundColor:"#722"}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a style={{color:"white"}} href="#home">Garage Goods</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#" >
      <p style={{color:"white"}} >Home </p>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <p style={{color:"white"}} >Members </p>
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
