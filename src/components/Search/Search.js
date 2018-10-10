import {Row, Col} from "react-bootstrap"
import Form from "./../Form"
import logo from  "./backgroundmain3.jpg"
import "./Search.css"
import React from "react"; 

const Search = () => (
    
    <div>
        
        <Row id="search" style={{paddingBottom:"5rem", paddingTop:"5rem",backgroundImage:`url(${logo})`}}>
            <Col md={7} style={{}} >
                <img alt="none" style={{width:"100%"}} src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png"></img>
            </Col>
            <Col md={5} >
                <Form style={{border:"solid"}} />
            </Col>
                
                
        </Row>
    </div>
   
);

export default Search; 