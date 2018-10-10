import React from "react"
import {Modal, Popover, Tooltip, Button, OverlayTrigger} from "react-bootstrap"
import Form from "./../Form"
import "./Login.css"

class Login extends React.Component{
    state = {
        show: false,
        show2: false
    }
    handleClose = () => {
        this.setState({show:false});
    }
    handleClose2 = () => {
        console.log(this.state.show2)
        this.setState({show2:false});
    }
    handleShow2= () => {
        this.setState({show2:true})
    }
    handleShow= () => {
        this.setState({show:true});
    }
    render(){
        return(
            <div>
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal id="modal" bsSize="large" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form></Form>
            {/* content goes here */}
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={this.handleShow2}>Second Modal</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
// second modal
        <Modal show={this.state.show2} onHide={this.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Modal 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            what is up?
          </Modal.Body>
          <Modal.Footer>
            
            <Button onClick={this.handleClose2}>Close</Button>
          </Modal.Footer>
        </Modal>

        
      </div>

        );
    }
}

export default Login;
