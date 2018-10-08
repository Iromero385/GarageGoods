import React from "react"
import {Grid, Col, Row} from "react-bootstrap"
import logo from  "./../../images/GarageGoods.gif"
import "./Wrapper.css"
const Wrapper = (props) => (
    <Grid fluid id= "wrapper">
     <Row>
        <Col md={4} style={{background:"black", height:900}}>
            <img alt="none" style={{width:"100%",paddingTop:"3rem"}} src={logo} ></img>
        </Col>
        <Col md={8} style={{background:"lightGray", height:900, paddingTop:"8rem"}}>
            {props.children}
        </Col>
     </Row>
    </Grid>
);

export default Wrapper; 