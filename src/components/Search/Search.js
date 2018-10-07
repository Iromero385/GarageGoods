import {Row, Col} from "react-bootstrap"
import Form from "./../Form"
import logo from  "./../../images/GarageGoods.gif"
import React from "react"; 

const Search = () => (
        <Row>
            <Col md={7} style={{}} >
                <img alt="none" style={{width:"100%"}} src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png"></img>
            </Col>
            <Col md={5} style={{}} >
                <Form style={{border:"solid"}} />
            </Col>
        </Row>
);

export default Search; 