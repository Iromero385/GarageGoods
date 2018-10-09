import React from "react"
import {Grid, Col, Row} from "react-bootstrap"
import logo from  "./../../images/GarageGoods.gif"
// import backgroundPic from "/backgroundmain2.jpg"
import "./Wrapper.css"

// const backgroundImg = {
//     backgroundImage: "url('/backgroudmain2.jpg')"
// }
const Wrapper = (props) => (
    <Grid fluid id= "wrapper">
     <Row>
        <Col md={4} >
            <img alt="none" style={{width:"100%", paddingTop:"3rem"}} src={logo} ></img>
        </Col>
        <Col md={8} style={{background:"lightGray", height:900, paddingTop:"8rem"}}>
        {/* <img src={this.props.url} alt=""  className="img-responsive" /> */}
            {props.children}
        </Col>
     </Row>
    </Grid>
);

export default Wrapper; 