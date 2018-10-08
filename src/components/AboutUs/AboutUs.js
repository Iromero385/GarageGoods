import {Row, Col} from "react-bootstrap"
import "./AboutUs.css"
import React from "react"

const backgroundImg = {
  backgroundImage: "url('/backgroudmain2.jpg')"
}

const AboutUs = () => (
    <Row >
    
    <Col md={12} xs={10} id="aboutUsBackground" style={backgroundImg}>
      <a href="/aboutUs" id="aboutUsLettering">About us</a>
    </Col>
  </Row>
);

export default AboutUs; 