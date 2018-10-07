import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap"
import Header from "./components/Header"
import Form from "./components/Form"
import './App.css';
class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Grid fluid>
          <Row >
            <Col md={2} xs={2} style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
              <img style={{width:"100%"}} src="http://sunprairieumc.org/wp-content/uploads/2016/03/garage-sale.jpg"></img>
          </Col>
            <Col md={10} xs={10} style={{padding:"3rem"}}>
              <a style={{}} href="/aboutUs" style={{fontSize:"4rem"}}>About us</a>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6} style={{}} >
           
              <img style={{width:"100%"}} src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png"></img>
            </Col>
            <Col md={4} style={{}} >
              <Form style={{border:"solid"}} />
            </Col>
            <Col md={2} style={{ writingMode: "vertical-lr", textOrientation: "upright"}}>
            <img style={{width:"100%"}} src="http://sunprairieumc.org/wp-content/uploads/2016/03/garage-sale.jpg"></img>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
