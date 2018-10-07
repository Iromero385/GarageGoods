import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    categories: "",
    location: "",
    date: ""
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
      categories: "",
      location: "",
      date: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form" style={{marginTop:0}}>
          <label style={{paddingTop:10}}> Categories </label>
          <input
            value={this.state.topic}
            name="Categories"
            onChange={this.handleInputChange}
            type="text"
            placeholder="What topic would you like to search?"
          />
          <label >Location</label>
          <input
            value={this.state.startDate}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Zipcode"
          />
          <label >Dates</label>
          <input
            value={this.state.endDate}
            name="date"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date"
            
          />
          <button style={{padding:".3rem"}} onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
