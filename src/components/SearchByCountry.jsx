import React, { useEffect, useState } from 'react'
function SearchByCountry() {
  const [countries, setcountries] = useState([])
  const [countryData, setcountryData] = useState(null)
  const [con, setcon] = useState(false)

  document.onclick = function () {
    setcountryData(null)
    setcon(false)
  }

  useEffect(() => {
    fetch('https://api.covid19api.com/countries').then((res) => {
      res.json().then((result) => {
        let array = []
        array = result
        array = result.map((country) => {
          return country.Country
        })
        array.sort()
        setcountries(array)
      })
    })
  }, [])

  function countrySelected(e) {
    setcon(false)
    fetch('https://api.covid19api.com/dayone/country/' + e.target.value).then(
      (res) => {
        res.json().then((data) => {
          let length = data.length
          setcountryData(data[length - 1])
          setcon(true)
        })
      },
    )
  }
  return (
    <>
      <div className="container" style={{ marginBottom: '20px' }}>
        <select className="form-select" onChange={countrySelected}>
          <option defaultValue="" selected hidden>
            choose your country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      {countryData != null ? (
        <div className="container country_data_card">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body my_body">
              <h3 className="fw-bolder">{countryData.Country}</h3>
              <p className="text-secondary">Cases : {countryData.Confirmed}</p>
              <p className="text-primary">
                Recovered : {countryData.Recovered}
              </p>
              <p className="text-success">Active : {countryData.Active}</p>
              <p className="text-danger">Deaths : {countryData.Deaths}</p>
              <p className="text-info">updated : {countryData.Date}</p>
            </div>
          </div>
        </div>
      ) : con !== true ? null : (
        <div id="my_data">
          <p
            style={{
              textAlign: 'center',
              color: 'red',
              fontWeight: '100',
              textTransform: 'lowercase',
            }}
          >
            data is not available for this country....
          </p>
        </div>
      )}
    </>
  )
}

export default SearchByCountry
