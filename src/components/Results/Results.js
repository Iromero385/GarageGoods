import React from "react";
import { Table, Grid, Col, Row } from "react-bootstrap";
import "./Results.css"

const Results = (props) => (
    <Table style={{backgroundColor:"lightgrey"}}  >
      <thead>
        <tr>
          <th>#</th>
          <th>Addres</th>
          <th>City</th>
          <th>CA</th>
          <th>Zip</th>
          <th>Sale Date</th>
      </tr>
      </thead>
        <tbody>
            {props.children}
        </tbody>
        <div style={{backgroundColor:"lightgray", width:"100%",height:100, marginLeft:0,marginRight:0, marginTop:"50rem" }}></div>
    </Table>
);
    
export default Results; 