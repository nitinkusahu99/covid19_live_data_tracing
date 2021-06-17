import React, { memo } from 'react'
import '../App.css'
import Flippy, { BackSide, FrontSide } from 'react-flippy'
import { IoIosArrowDropdown } from 'react-icons/io'
import { FiChevronsDown } from 'react-icons/fi'
function TotalCases(props) {
  const data = props.data.Global
  return (
    <>
      <div className="text-center">
        <h3 className="p-3 mb-2 bg-info text-white">
          COVID-19 CORONAVIRUS PANDEMIC
        </h3>
        <p className="fw-lighter fs-6 text-center vert-move">
          <a className="text-decoration-none" href="#vert-move">
            search by country <IoIosArrowDropdown />
          </a>
        </p>
        <p>last update {data.Date}</p>
        <div className="totalcases_card">
          <h2 className="fw-bolder text-success">
            Coronavirus Cases (worldWide) :
          </h2>
          <h2 className="text-success fw-bolder">{data.TotalConfirmed}</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style bg-danger text-white">
                  NewConfirmed
                  <br /> <FiChevronsDown />
                </FrontSide>

                <BackSide className="flip_style bg-danger text-white">
                  {data.NewConfirmed}
                </BackSide>
              </Flippy>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style  bg-warning">
                  NewDeaths
                  <br /> <FiChevronsDown />
                </FrontSide>
                <BackSide className="flip_style bg-warning">
                  {data.NewDeaths}
                </BackSide>
              </Flippy>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style bg-success">
                  NewRecovered
                  <br /> <FiChevronsDown />
                </FrontSide>
                <BackSide className="flip_style bg-success">
                  {data.NewRecovered}
                </BackSide>
              </Flippy>
            </div>
          </div>

          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style bg-secondary">
                  TotalRecovered
                  <br /> <FiChevronsDown />
                </FrontSide>
                <BackSide className="flip_style bg-secondary">
                  {data.TotalRecovered}
                </BackSide>
              </Flippy>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style bg-info ">
                  TotalDeaths
                  <br /> <FiChevronsDown />
                </FrontSide>
                <BackSide className="flip_style bg-info">
                  {data.TotalDeaths}
                </BackSide>
              </Flippy>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical"
                className="flip_card"
              >
                <FrontSide className="flip_style bg-primary">
                  last updated <br /> <FiChevronsDown />
                </FrontSide>
                <BackSide className="flip_style bg-primary">
                  {data.Date}
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default memo(TotalCases)
