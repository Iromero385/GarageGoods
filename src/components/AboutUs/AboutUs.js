import {Row, Col} from "react-bootstrap"
import logo from  "./../../images/GarageGoods.gif"
import React from "react"

const AboutUs = () => (
    <Row >
    <Col md={2} xs={2} style={{ writingMode: "vertical-lr", textOrientation: "upright" }}>
      <img alt="none" style={{width:"100%"}} src={logo} ></img>
  </Col>
    <Col md={8} xs={10} style={{padding:"3rem"}}>
      <a href="/aboutUs" style={{fontSize:"4rem"}}>About us</a>
    </Col>
  </Row>
);

export default AboutUs; 