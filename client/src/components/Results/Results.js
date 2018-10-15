import React from "react";
import { Table, Col } from "react-bootstrap";
import TableRow from "./../TableRow"
import API from "./../../utils/API"
import { Link, Route } from "react-router-dom";
import Search from "./../Search"
import "./Results.css"


class Results extends React.Component {
    state={
        results:[]
    }
    componentDidMount() {
        this.listings();
    }
    listings = () => {
        API.findAll().then(res => {
            this.setState({results:res.data})
        }).catch(err => console.log(err))
    }
render() {
    return (

    <Col md={12}>
        <Table striped responsive bordered style={{backgroundColor:"lightgray", marginTop:"3rem" }}  >
            <thead>
                <tr style={{backgroundColor:"sandybrown", padding:"1rem",fontSize:"2rem"}}>
                    <th>Post</th>
                    <th>Addres</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Sale Date</th>
                </tr>
            </thead>
            <tbody>
                    {this.state.results.map(row=>{
                        return(
                                <TableRow 
                                key={row.id}
                                address={row.address}
                                state = {row.state}
                                zipcode = {row.zipcode}
                                city = {row.city}
                                date = {row.date}
                                userId = {row.UserId}
                                ></TableRow>
                            )
                            
                        })
                    }
            </tbody>
        </Table>
        <Link to={`${this.props.match.url}/Search`} style={{fontSize:"3rem",float:"left", marginRight:"3rem"}}>
        <p> Plus Google</p>
        </Link>
    
        <Link to="/Members" style={{fontSize:"3rem", float:"right"}}>
        <p>Minus Google</p>
        </Link>
        <Route exact path={`${this.props.match.url}/Search`} component={Search} />
        <div style={{ backgroundColor: "lightgray", width: "100%", height: 100, marginLeft: 0, marginRight: 0, marginTop: "50rem" }}></div>
    </Col>

    )
        };
    }

    export default Results; 