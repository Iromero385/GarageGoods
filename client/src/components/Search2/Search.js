import {Row, Col} from "react-bootstrap"

import logo from  "./backgroundmain3.jpg"
import "./Search.css"
import React from "react"; 
import SimpleMap from "./../Google2"



const Search = () => (
    
    <div>
        
        <Row id="search" style={{paddingBottom:"5rem", paddingTop:"5rem",backgroundImage:`url(${logo})`}}>
            <Col md={12} style={{}} >
                <SimpleMap/>
            </Col>  
        </Row>
    </div>
   
);

export default Search; 