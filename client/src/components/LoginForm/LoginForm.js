import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap"
import "./LoginForm.css";
const style = {
  paddingTop: 10,fontSize:"3rem",color:"white" 
}
class LoginForm extends Component {
  
  // Setting the component's initial state
  state = {
    Email: "",
    Password: "",
    NickName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {


    this.setState({
      Email: "",
      Password: "",
      NickName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Grid>
        <Row>
          <Col md={8} style={{marginTop:"10rem",paddingLeft:"10rem"}}>
            <form className="form" style={{ marginTop: 0 }}>
              <label style={style}> Email </label>
              <input
                value={this.state.topic}
                name="Email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="SalingEveryting@GarageGoods.com?"
              />
              <label style={style}>Password</label>
              <input
                value={this.state.startDate}
                name="Password"
                onChange={this.handleInputChange}
                type="Password"
                placeholder="Secret"
              />
              <label style={style} >NickName</label>
              <input
                value={this.state.endDate}
                name="NickName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="What should we call you?"

              />
              <button 
              style={{backgroundColor:"sandybrown",fontSize:"3rem", color:"white", width:"100%",marginTop:"2rem"}} 
              onClick={this.handleFormSubmit}>
              login
              </button>
            </form>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default LoginForm;
