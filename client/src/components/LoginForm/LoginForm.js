import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap"
import API from "../../utils/API"
import "./LoginForm.css";
const style = {
  paddingTop: 10,fontSize:"3rem",color:"white" 
}
class LoginForm extends Component {
  
  // Setting the component's initial state
  state = {
    Email: "",
    Password: ""
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
    event.preventDefault();
    if (this.props.SecondModal === true){
      API.singup({
        email: this.state.Email,
        password:this.state.Password
      }).then(res => {
        console.log(res.data.signup)
        
          this.setState({
            Email: "",
            Password: ""
          });
          this.props.closeModal();
          this.props.closeModal2();
          window.location.assign(res.data)
        
      
      }).catch(err => console.log(err))
    }
    else{
      API.login({
        email: this.state.Email,
        password:this.state.Password
      }).then(res => {
          this.setState({
            Email: "",
            Password: ""
          })
          this.props.closeModal();
        })
        .catch(err => console.log(err))
    }
  };
  change = () => {
    if(this.props.SecondModal===true){
      return "Signup"
    }
    else{
      return "Login"
    }
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Grid>
        <Row>
          <Col md={8} style={{marginTop:"10rem",paddingLeft:"10rem"}}>
            <form className="form" style={{ marginTop: 0 }}>
              <label style={style}> Email </label>
              <input
                value={this.state.Email}
                name="Email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="David@GarageGoods.com?"
              />
              <label style={style}>Password</label>
              <input
                value={this.state.Password}
                name="Password"
                onChange={this.handleInputChange}
                type="Password"
                placeholder="Secret"
              />
              {/* <label style={style} >NickName</label>
              <input
                value={this.state.endDate}
                name="NickName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="What should we call you?"

              /> */}
              <button 
              style={{backgroundColor:"sandybrown",fontSize:"3rem", color:"white", width:"100%",marginTop:"2rem"}} 
              onClick={this.handleFormSubmit}>
                {this.change()}
              </button>
            </form>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default LoginForm;
