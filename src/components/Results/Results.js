import React from "react";
import { Table } from "react-bootstrap";
import "./Results.css"

const Results = (props) => (
    <Table striped bordered condensed hover >
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
    </Table>
);
    
export default Results; 