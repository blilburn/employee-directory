import React from "react";
// import Table from "react-bootstrap/Table";
// import Navbar from "./Navbar.js";
function EmployeeTable(props) {
    // const users = props.users;

    //Adjusts the order of the displayed table headers
    return (
        <table className="table table-hover" style={{width: '50%', margin: '0 auto'}}>
        <thead>
            <tr>
                <th scope="col">Photo ID</th>
                <th scope="col">Name </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>

            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
        //</Table>
        // <div>
        //     <Navbar></Navbar>
        //     <input placehoder="Search by name" type="text" className="searchBar">
        //     </input>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Photo ID</th>
        //                 <th>First Name</th>
        //                 <th>Last Name</th>
        //                 <th>Email Address</th>
        //                 <th>Phone Number</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>

        //                 <td><img className="card-img" src={users.length > 0 ? users[0].picture.medium : ""} alt="user thumbnail" /></td>
        //                 <td> {users.length > 0 ? users[0].name.first : ""}</td>
        //                 <td>{users.length > 0 ? users[0].name.last : ""}</td>
        //                 <td>{users.length > 0 ? users[0].email : ""}</td>
        //                 <td>{users.length > 0 ? users[0].phone : ""}</td>

        //             </tr>
        //         </tbody>
        //     </table>
        // </div>

    )
}
/* {users.length > 0 ? users[0].name.first : ""} */
/* Hello {console.log(users)} */
/* {users[0].picture.medium} */
export default EmployeeTable;