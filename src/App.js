import React, { Component } from 'react';
import AboutUs from "./components/AboutUs"
import { Grid } from "react-bootstrap"
import Header from "./components/Header"
import Search from "./components/Search"
import Wrapper from "./components/Wrapper"
// import backImg from "./images/backgroudmain2.jpg"
import './App.css';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Wrapper>
            <AboutUs></AboutUs>      
        </Wrapper>
        
      </div>

    );
  }
}

export default App;
