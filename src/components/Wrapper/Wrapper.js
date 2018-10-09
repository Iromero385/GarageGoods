import React from "react"
import {Grid, Col, Row} from "react-bootstrap"
import logo from  "./../../images/GarageGoods.gif"
import backgroundPic from "./backgroudmain2.jpg"
import "./Wrapper.css" 
const backgroundImg = {
  backgroundImage: `url(${logo})`
}
const backgroundImg2 = {
    backgroundImage: `url(${backgroundPic})`,
    height:900,
}

// const backgroundImg = {
//     backgroundImage: "url('/backgroudmain2.jpg')"
// }
const Wrapper = (props) => (
    <Grid fluid id= "wrapper">
     <Row>
        <Col md={4} >
            <div id="logoId" style={backgroundImg}></div>
            {/* <img alt="none" style={{width:"100%", paddingTop:"3rem"}} src={logo} ></img> */}
        </Col>
        <Col md={8} id="backgroundImage" style={backgroundImg2}>
        {/* <img src={this.props.url} alt=""  className="img-responsive" /> */}
            {props.children}
        </Col>
     </Row>
    </Grid>
);

export default Wrapper; 