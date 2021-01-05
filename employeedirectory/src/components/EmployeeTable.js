// import Table from "react-bootstrap/Table";
import Navbar from "./Navbar.js";
function EmployeeTable(props) {
    const users = props.users;

    return (
        //</Table>
        <div>
            <Navbar></Navbar>
            <input placehoder="Search by name" type="text" className="searchBar">
            </input>
            <table>
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td><img className="card-img" src={users.length > 0 ? users[0].picture.medium : ""} alt="user thumbnail" /></td>
                        <td> {users.length > 0 ? users[0].name.first : ""}</td>
                        <td>{users.length > 0 ? users[0].name.last : ""}</td>
                        <td>{users.length > 0 ? users[0].email : ""}</td>
                        <td>{users.length > 0 ? users[0].phone : ""}</td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}
/* {users.length > 0 ? users[0].name.first : ""} */
/* Hello {console.log(users)} */
/* {users[0].picture.medium} */
export default EmployeeTable;