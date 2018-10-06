
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React from "react";

const Header = () => (
  <div>

    <Navbar style={{backgroundColor:"lightgreen"}}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Garage Goods</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    
  </div>
);

export default Header;
