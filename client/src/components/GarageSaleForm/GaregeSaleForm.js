import React, { Component } from "react";
import {Col, Row} from "react-bootstrap"
import "./Form.css";


class GarageSaleForm extends Component {
  // Setting the component's initial state
  state = {
    address: "",
    state: "",
    city: "",
    date:"",
    zipcode:""
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
      address: "",
      state: "",
      city: "",
      date:"",
      zipcode:""
    });
  };
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Row>
        <Col md={12} >
        <form className="form" style={{marginTop:"3rem", backgroundColor:""}}>
          <label style={{paddingTop:10, color: "#ffffff"  , fontSize: 25}}> Address </label>
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Where is the garage sale?"
          />
          <label style={{paddingTop:10, color: "#ffffff", fontSize: 25}}>City</label>
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="city"
          />
          <label style={{paddingTop:10, color: "#ffffff", fontSize: 25}}>State</label>
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="state"
          />
          <label style={{paddingTop:10, color: "#ffffff", fontSize: 25}}>Zipcode</label>
          <input
            value={this.state.zipcode}
            name="zipcode"
            onChange={this.handleInputChange}
            type="text"
            placeholder="zipcode"
            
          />
          <label style={{paddingTop:10, color: "#ffffff", fontSize: 25}}>Dates</label>
          <input
            value={this.state.date}
            name="date"
            onChange={this.handleInputChange}
            type="text"
            placeholder="When will the garage sale happen?"
            
          />
          <button style={{padding:".3rem"}} onClick={this.handleFormSubmit}>Submit</button>
        </form>
        </Col>
      </Row>
    );
  }
}

export default GarageSaleForm;
