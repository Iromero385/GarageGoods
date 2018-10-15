import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Results from "./components/Results";
import Results2 from "./components/Results2";
import Login from "./components/Login";
import Logout from "./components/Logout";
import API from "./utils/API"
import GarageSaleForm from "./components/GarageSaleForm"
import './App.css';




class App  extends React.Component{ 
  state={
    id:"",
    email:""
  }
  userdata = () => {
    API.currentUser().then((res) => {
        if(res.data.id){
            this.setState({id:res.data.id, email:this.res.data.email})
        }
    }).catch(err => console.log(err))
}
  render(){
    return(
  
        <Router>
          <div className="App">
            <Header />
            <Wrapper>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/CreatePost" component={GarageSaleForm} />
                  <Route exact path="/logout" component={Logout} />
                  <Route exact path="/Members" component={Results} />
                  <Route exact path="/MyPost" component={Results2}/>
                  <Route path="/Results" component={Results} />
                </Switch>
  
            </Wrapper >
          </div >
        </Router>
      )};
    
  }


export default App;
