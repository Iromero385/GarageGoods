import React from "react"
import {Modal, Button} from "react-bootstrap"
import LoginForm from "./../LoginForm"

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
        <Modal  id="modal" bsSize="large" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton style={{backgroundColor:"sandybrown", borderRadius:"1rem"}}>
            <Modal.Title style={{color:"white", fontSize:"3rem"}}>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body className="loginBody" >
              <LoginForm></LoginForm>
            {/* content goes here */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
              <Button onClick={this.handleShow2}>Second Modal</Button>
          </Modal.Footer>
        </Modal>
          {/* second Modal */}

        <Modal bsSize="large" show={this.state.show2} onHide={this.handleClose2}>
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
