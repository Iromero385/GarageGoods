import {Row, Col} from "react-bootstrap"
import "./AboutUs.css"
import React from "react"
import backgroundImage from './backgroudmain2.jpg'
const backgroundImg = {
  backgroundImage: `url(${backgroundImage})`
}

const AboutUs = () => (
    <Row >
    
    <Col md={12} xs={10} id="aboutUsBackground" style={backgroundImg}>
      <a href="/aboutUs" id="aboutUsLettering">About us</a>
    </Col>
  </Row>
);

export default AboutUs; 