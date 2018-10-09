import React, { Component } from 'react';
import AboutUs from "./components/AboutUs"
import { Grid } from "react-bootstrap"
import Header from "./components/Header"
import Search from "./components/Search"
import Wrapper from "./components/Wrapper"
import backImge from "./images/backgroudmain2.jpg"
import Results from "./components/Results"
import TableRow from "./components/TableRow"
import Login from "./components/Login"
import './App.css';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Wrapper>
        <Login></Login>
            <AboutUs></AboutUs>
            <Search/>  
            <Results>
              <TableRow></TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
              <TableRow></TableRow>
            </Results>
        </Wrapper>
        
      </div>

    );
  }
}

export default App;
