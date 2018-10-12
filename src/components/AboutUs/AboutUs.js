import { Row, Col } from "react-bootstrap"
import "./AboutUs.css"
import React from "react"
import backgroundImage from './backgroudmain2.jpg'
const backgroundImg = {
  backgroundImage: `url(${backgroundImage})`
}

const AboutUs = () => (

    <Row >
      <Col md={12} xs={10} className="aboutUsBackground" >
        <br />
        <a href="/aboutUs" id="aboutUsLettering">About us</a>
      </Col>
      <div style={{backgroundColor:"lightgray", width:"100%",height:100, marginLeft:0,marginRight:0, marginTop:"50rem" }}></div>
    </Row>

);

export default AboutUs; 