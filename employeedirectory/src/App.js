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
  //sorting table results
  const [sorts, setCitySort] = useState(true)

  //Made use of React useEffect hook for API call
  useEffect(() => {
    obj.getEmployees().then((res) => 
    setResults(res.data.results))
  }, [])

  // Function to sort by ascending order
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  let ascendCitySort = function (prop, arr) {
    arr.sort(function (a, b) {
      if (a.location[prop] < b.location[prop]) {
        return -1;
      } else if (a.location[prop] > b.location[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

    // Function to sort by descending order
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  let descendCitySort = function (prop, arr) {
    arr.sort(function (a, b) {
      if (a.location[prop] < b.location[prop]) {
        return 1;
      } else if (a.location[prop] > b.location[prop]) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    if (sorts) {
      ascendCitySort("city", results)
    }
    else {
      descendCitySort('city', results)
    }
  }, [sorts])


  return (
    <div className="App" >
      <Navbar></Navbar>
      <Container>
        <input placeholder="Search by first name" className="searchBar" type="text" value={search} onChange={(event) => { setSearch(event.target.value) }}>
        </input>
        <div style={{alignContent: 'center', textAlign: 'center'}}>
        <EmployeeTable   sorts={sorts} setCitySort={setCitySort}>
          {search.length < 1 ? results.map((result, i) => (
            <TableContent
              picture={result.picture.large} 
              name={result.name.first + " " + result.name.last}
              number={i}
              phone={result.phone}
              email={result.email} 
              city={result.location.city}>
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
                    email={result.email}
                    city={result.location.city}>
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