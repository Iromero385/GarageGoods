import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React from "react";
import { Link } from "react-router-dom";
import API from "./../../utils/API"
import "./Header.css"


class Header extends React.Component {
  state={
    email:""
  }
  componentDidMount(){
   this.setState({email:this.props.userEmail})
  }
logoutPlease = () => {
  API.logout().then(res => window.location.assign("/Logout")).catch(err => console.log(err))
}

userdata = () => {
    API.currentUser().then((res) => {
      console.log(res.data)
        if(res.data){
            this.setState({email:res.data.email})
        }
    }).catch(err => console.log(err))
}
render(){

    return(
  <div>
    <Navbar id="navbar" fixedTop fluid>
      <Navbar.Header >
        <Navbar.Brand>
          <Link to="/home" >Garage Goods: {this.state.email}</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="/" >
          Home
        </NavItem>
        <NavItem eventKey={2} href="/Members">
          Members
        </NavItem>
        <NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/MyPost"> <p  style={{ color: "black" }}>My Post</p></MenuItem>
          <MenuItem eventKey={3.2} href="/CreatePost"><p style={{ color: "black" }}>Create Post</p></MenuItem>
          {/* <MenuItem eventKey={3.3}><p style={{ color: "black" }}>Something Here</p></MenuItem> */}
          <MenuItem divider />
          <MenuItem eventKey={3.4}><p style={{ color: "black" }}onClick={this.logoutPlease}>Logout</p></MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

  </div>
    )
}
}

export default Header;
