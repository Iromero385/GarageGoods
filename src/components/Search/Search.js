import {Row, Col} from "react-bootstrap"
import Form from "./../Form"
import logo from  "./../../images/GarageGoods.gif"
import React from "react"; 

const Search = () => (
        <Row>
            <Col md={6} style={{}} >
                <img alt="none" style={{width:"100%"}} src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png"></img>
            </Col>
            <Col md={4} style={{}} >
                <Form style={{border:"solid"}} />
            </Col>
            <Col md={2} style={{ writingMode: "vertical-lr", textOrientation: "upright"}}>
            <img alt="none" style={{width:"100%"}} src={logo}></img>
            </Col>
        </Row>
);

export default Search; 