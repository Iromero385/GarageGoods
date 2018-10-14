import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Results from "./components/Results";
import Login from "./components/Login";
import './App.css';



const App = () => (

      <Router>
        <div className="App">
          <Header />
          <Wrapper>
              <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route exact path="/logout" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Search" component={Results} />
                <Route path="/Results" component={Results} />
              </Switch>

          </Wrapper >
        </div >
      </Router>
    );


export default App;
