import React from "react";
import { Table, Col } from "react-bootstrap";
import TableRow from "./../TableRow"
import API from "./../../utils/API"
import "./Results.css"


class Results extends React.Component {
    state={
        results:[]
    }
    componentDidMount() {
        this.listings();
    }
    userdata = () => {
        API.currentUser().then((res) => {
        }).catch(err => console.log(err))
    }
    listings = () => {
        API.findAll().then(res => {
            this.setState({results:res.data})
        }).catch(err => console.log(err))
    }
render() {
    return (

    <Col md={12}>
        <Table style={{ backgroundColor: "lightgrey" }}  >
            <thead>
                <tr>
                    <th>#</th>
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
        <div style={{ backgroundColor: "lightgray", width: "100%", height: 100, marginLeft: 0, marginRight: 0, marginTop: "50rem" }}></div>
    </Col>

    )
        };
    }

    export default Results; 