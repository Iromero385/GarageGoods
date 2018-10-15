import React from "react";
import "./TableRow.css";

const TableRow = (props) => (
    <tr>
      <td>#</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.zipcode}</td>
      <td>{props.date}</td>
    </tr>
);
    
export default TableRow; 