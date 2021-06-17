import React, { memo } from 'react'
import '../App.css'
import corona_img from '../images/corona.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import { IoIosArrowDropdown } from 'react-icons/io'
function IndiaCard(props) {
  const data = props.data
  return (
    <>
      <section>
        <h2 className="text-danger text-center mt-3 fw-bolder">
          CORONAVIRUS IN INDIA
        </h2>
        <p className="text-center text-success">
          Last updated : {data.lastupdatedtime}
        </p>

        <p className="fw-lighter fs-6 text-center vert-move">
          <a className="text-decoration-none" href="#section">
            search by states <IoIosArrowDropdown />
          </a>
        </p>

        <div className="container">
          <div className="row">
            <div className="col bg-danger">
              <div className="card">
                <img className="indiacases_img" src={corona_img} alt="error" />
                <h3 className="text-danger fw-bolder">covid-19 cases</h3>
                <h3 className="text-danger fw-bolder">{data.confirmed}</h3>
              </div>
            </div>

            <div className="col bg-success">
              <div className="card">
                <img className="indiacases_img" src={c2} alt="error" />
                <h3 className="text-success fw-bolder">Recovered cases</h3>
                <h3 className="text-success fw-bolder">{data.recovered}</h3>
              </div>
            </div>

            <div className="col bg-warning">
              <div className="card">
                <img className="indiacases_img" src={c3} alt="error" />
                <h3 className="text-warning fw-bolder">total deaths</h3>
                <h3 className="text-warning fw-bolder">{data.deaths}</h3>
              </div>
            </div>

            <div className="col bg-primary">
              <div className="card">
                <img className="indiacases_img" src={c4} alt="error" />
                <h3 className=" text-primary fw-bolder">Active cases</h3>
                <h3 className="text-primary fw-bolder">{data.active}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(IndiaCard)
