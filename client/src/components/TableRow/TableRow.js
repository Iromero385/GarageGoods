import React from "react";
import {Collapse, Well} from "react-bootstrap"
import "./TableRow.css";

class TableRow extends React.Component{
  state = {
    open: false
  }
  someRandomComment  =() => {
    const num = Math.floor(Math.random()*2)
    if (num === 1){
      return "Good Stuff!"
    }
    else{
      return "Man this dude is pricesly"
    }
  }
  handleCollapseToogle = () => {
    this.setState({ open: !this.state.open })
  }
  render(){
    return(
        
            
          <tr onClick={() => this.handleCollapseToogle()}>
            <td> Comments<Collapse in={this.state.open} >
                  <div>
                    <Well >
                    <p>{this.someRandomComment()}</p>   
                  </Well>
                  </div>
              </Collapse></td>
            <td>{this.props.address}</td>
            <td>{this.props.city}</td>
            <td>{this.props.state}</td>
            <td>{this.props.zipcode}</td>
            <td>{this.props.date}</td>
          </tr>
      );
  }
}
    
export default TableRow; 