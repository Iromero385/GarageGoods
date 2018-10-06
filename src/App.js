import React, { Component } from 'react';
import {Grid, Row, Col} from "react-bootstrap"
import Header from "./components/Header"
import './App.css';

class App extends Component {
  render() {
    return (
    
      <div className="App">
      <Header/>
      <Grid>
        <Row >
          <Col md={6} sytle={{backgroundColor:"blue"}}>
              <p>Amica won't let me eat cake</p>
          </Col>
        </Row>
      </Grid>
      </div>  

    );
  }
}

export default App;
