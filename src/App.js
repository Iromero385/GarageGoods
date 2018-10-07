import React, { Component } from 'react';
import AboutUs from "./components/AboutUs"
import { Grid } from "react-bootstrap"
import Header from "./components/Header"
import Search from "./components/Search"



import './App.css';
class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Grid fluid>
        <AboutUs/>
        <Search/>
        </Grid>
      </div>

    );
  }
}

export default App;
