import React, { useState, useEffect } from "react"
import Container from "./components/Container.js";
import EmployeeTable from "./components/EmployeeTable.js";
import TableContent from "./components/TableContent.js"
import Navbar from "./components/Navbar.js";
import obj from "./utils/API"
import './App.css';

function App() {
  //Made use of React useState hook for results
  const [results, setResults] = useState([])
  //Setting Search
  const [search, setSearch] = useState("")


  //Made use of React useEffect hook for API call
  useEffect(() => {
    obj.getEmployees().then((res) => 
    setResults(res.data.results))
  }, [])

//Displays application content and filters 
  return (
    <div className="App" >
      <Navbar></Navbar>
      <Container>
        <input placeholder="Search by first name" className="searchBar" type="text" value={search} onChange={(event) => { setSearch(event.target.value) }}>
        </input>
        <div style={{alignContent: 'center', textAlign: 'center'}}>
        <EmployeeTable >
          {search.length < 1 ? results.map((result, i) => (
            <TableContent
              picture={result.picture.large} 
              name={result.name.first + " " + result.name.last}
              number={i}
              phone={result.phone}
              email={result.email} >
            </TableContent>
          )) :
            results.map((result, i) => {
              if (result.name.first.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <TableContent
                    picture={result.picture.large} 
                    name={result.name.first + " " + result.name.last}
                    number={i}
                    phone={result.phone}
                    email={result.email}>
                  </TableContent>)
              } else {return (false)}
            }) 
          } 
        </EmployeeTable>
        </div>
      </Container>
    </div>
  )
}

export default App;