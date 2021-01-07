import React from "react";

function EmployeeTable(props) {


    //Adjusts the order of the displayed table headers
    return (
        <table className="table table-hover" style={{width: '75%', margin: '0 auto'}}>
        <thead>
            <tr>
                <th scope="col">Photo ID</th>
                <th scope="col">Name </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Location<span className=''><svg className="" onClick={() => {props.setCitySort(!props.sorts)}} width="1rem" height="1rem"  ><path d="M19 9l-7 7-7-7" /></svg></span></th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>

    )
}
export default EmployeeTable;