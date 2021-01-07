
import React from "react";
//Order of displayed Employee information
function TableContent(props) {
    return (
        <tr className="table-active" key={props.id}>
            <td><img  alt={props.name} src={props.picture}></img></td>
            <th>{props.name}</th>
            <td >{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.city}</td>
        </tr>
    )

}

export default TableContent;