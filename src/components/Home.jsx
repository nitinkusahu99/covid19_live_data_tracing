import React, { useState, useEffect, lazy, Suspense } from 'react'
import '../App.css'
import { Table, Spinner } from 'react-bootstrap'
import { FiArrowUp } from 'react-icons/fi'
import { GoArrowDown } from 'react-icons/go'
const TotalCases = lazy(() => import('../components/TotalCases'))
const SearchByCountry = lazy(() => import('../components/SearchByCountry'))
function Home() {
  const [spin, setspin] = useState(true)
  const [state, setState] = useState([])
  const [totalcase, settotalcase] = useState(null)
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
  useEffect(() => {
    try {
      fetch('https://api.covid19api.com/summary').then((res) => {
        res.json().then((result) => {
          settotalcase(result)
          const c = result.Countries
          setState(c)
          setspin(false)
        })
      })
    } catch (error) {
      console.log('my error is' + error)
    }
  }, [])

  const searchMyCountry = () => {
    let data = document.getElementById('myInput').value.toUpperCase()
    let table = document.getElementById('mytable')
    let tr = table.getElementsByTagName('tr')
    for (var i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[1]
      if (td) {
        let textvalue = td.textContent || td.innerHTML
        if (textvalue.toUpperCase().indexOf(data) > -1) {
          tr[i].style.display = ''
        } else {
          tr[i].style.display = 'none'
        }
      }
    }
  }
  function updateStatus() {
    if (navigator.onLine);
    else {
      document.getElementById('status').innerHTML = 'oops! you are offline...'
    }
  }
  return (
    <div>
      <div
        id="status"
        className="text-center bg-warning"
        style={{
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      ></div>
      <h4 className="text-center live_style">🔴 LIVE</h4>
      <Suspense fallback={<div>loading...</div>}>
        <SearchByCountry />
      </Suspense>
      {totalcase != null ? (
        <Suspense fallback={<div className="text-primary">loading...</div>}>
          <TotalCases data={totalcase} />
        </Suspense>
      ) : null}
      <div>
        <h2
          id="vert-move"
          className="fw-bolder text-secondary text-center mt-5 mb-3"
        >
          Search by Country
        </h2>
        <div style={{ float: 'right', color: 'black' }}>
          <a href="#down_section">
            <GoArrowDown />
          </a>
        </div>

        <div className="container searchBox">
          <input
            className="form-control form-outline"
            id="myInput"
            type="text"
            placeholder="search by country here..."
            onKeyUp={searchMyCountry}
            autoComplete="off"
          />
        </div>

        <Table striped bordered hover responsive="sm" id="mytable">
          <thead>
            <tr>
              <th>id</th>
              <th>Country</th>
              <th>NewConfirmed</th>
              <th>NewDeaths</th>
              <th>TotalDeaths</th>
              <th>TotalCases</th>
              <th>TotalRecovered</th>
              <th>TotalCases</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => (
              <tr key={index} className="text-white">
                <td className="bg-info">{index + 1}</td>
                <td className="bg-secondary">{item.Country}</td>
                <td className="bg-success">{item.NewConfirmed}</td>
                <td style={{ backgroundColor: 'purple' }}>{item.NewDeaths}</td>
                <td className="bg-primary">{item.TotalDeaths}</td>
                <td style={{ backgroundColor: 'pink' }}>{item.NewRecovered}</td>
                <td className="bg-warning">{item.TotalRecovered}</td>
                <td className="bg-danger">
                  {item.NewConfirmed + item.TotalRecovered + item.TotalDeaths}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {spin === true ? (
          <div className="text-center">
            <Spinner animation="grow" variant="info" />
          </div>
        ) : null}
      </div>
      <p id="down_section" className="vert-move">
        <a href="#covid19-meter">
          Covid19 meter <FiArrowUp />
        </a>
      </p>
    </div>
  )
}

export default Home
