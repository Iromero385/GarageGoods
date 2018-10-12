import { Row, Col, Collapse, Well } from "react-bootstrap"
import "./AboutUs.css"
import React from "react"
import backgroundImage from './backgroudmain2.jpg'
const backgroundImg = {
  backgroundImage: `url(${backgroundImage})`
}

class AboutUs extends React.Component {
  state = {
    open: false
  }
  handleCollapseToogle = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (

      <Row >
        <Col md={12} xs={10} className="aboutUsBackground" >
          <br />
          <div className="aboutUsLettering" onClick={() => this.handleCollapseToogle()} >About us</div>
          <Collapse in={this.state.open} >
            <div>
              <Well style={{ backgroundColor: "transparent", color: "white", fontSize: "3rem" }}>
                <p>About GarageGoods</p>
                <p>We collect, review and deliver the best information --- so you don’t have too.
                GarageGoods was co-founded in 2018 by Isaac Romero and Amico Kaur (students at UC Extentions as Full stack Developers) instructed by David Hallinan ().
                What We Do At GarageGoods , we collect, review, and deliver the best information in the market, so you don’t have to. Our data collects the presents and future garage sales and can be search by categories, city and zip code. You can also create, check your post and review your incoming garage sales.
                </p>
    
            </Well>
            </div>
          </Collapse>
        </Col>
        <div style={{ backgroundColor: "lightgray", width: "100%", height: 100, marginLeft: 0, marginRight: 0, marginTop: "50rem" }}></div>
      </Row>
    );
  }
}

export default AboutUs; 