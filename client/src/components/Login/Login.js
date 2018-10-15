import React from "react"
import {Modal, Button} from "react-bootstrap"
import LoginForm from "./../LoginForm"
import AboutUs from "./../AboutUs"

import "./Login.css"

class Login extends React.Component{
    state = {
        show: true,
        show2: false
    }

    handleClose = () => {
        this.setState({show:false});
    }
    handleClose2 = () => {
       
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
       
          <AboutUs/>
        <Modal  id="modal" bsSize="large" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton style={{backgroundColor:"sandybrown", borderRadius:"1rem"}}>
            <Modal.Title style={{color:"white", fontSize:"3rem"}}>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body className="loginBody" >
              <LoginForm userData={this.props.userData} closeModal={this.handleClose}></LoginForm>
            {/* content goes here */}
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={this.handleShow2} style={{fontSize:"2rem", fontWeight:"bold"}}>Sign up</Button>
          </Modal.Footer>
        </Modal>
          {/* second Modal */}

        <Modal bsSize="large" show={this.state.show2} onHide={this.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body className="loginBody2" >
          <LoginForm closeModal={this.handleClose} closeModal2={this.handleClose2} SecondModal={true}></LoginForm>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        
      </div>

        );
    }
}

export default Login;
