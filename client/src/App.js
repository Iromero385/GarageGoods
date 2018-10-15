import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
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
  userData = () => {
    API.currentUser().then((res) => {
        if(res.data){
          debugger
          this.setState({id:res.data.id, email:res.data.email})
        }
    }).catch(err => console.log(err))
  }
  render(){
    return(
      <Router>
          <div className="App">
            <Header userEmail={this.state.email}/>
            <Wrapper>
                  <Route exact path="/" render={(props) => <Login {...props} userData={this.userData} />} />
                  <Route exact path="/CreatePost" component={GarageSaleForm} />
                  <Route exact path="/logout" component={Logout} />
                  <Route path="/MyPost" component={Results2}/>
                  <Route exact path="/Search" component={Search} />
                  <Route path="/Members" component={Results} />
            </Wrapper >
          </div >
        </Router>
      )};
    
  }


export default App;
