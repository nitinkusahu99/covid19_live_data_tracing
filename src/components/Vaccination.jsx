import React, { lazy, Suspense, useEffect } from 'react'
import $ from 'jquery'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BiRightArrowCircle } from 'react-icons/bi'
const Covid19Info = lazy(() => import('../components/Covid19Info'))
const VaccineInfo = lazy(() => import('../components/VaccineInfo'))
const RegistrationInfo = lazy(() => import('../components/RegistrationInfo'))
const Others = lazy(() => import('../components/Others'))
function Vaccination() {
  useEffect(() => {
    $(document).ready(function () {
      $('ul li').click(function () {
        $('.active li').css('background-color', 'blue')
      })
    })
  }, [])
  return (
    <>
      <div className="container">
        <Router>
          <div className="row">
            <div className="col col-lg-3 col-md-4  col-sm-4 col-12  broder_style">
              <ul>
                <li>
                  <Link to="/vaccination">
                    <a href="/#" alt="error">
                      covid-19 <BiRightArrowCircle />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/vaccineInfo">
                    <a href="/#" alt="error">
                      vaccination <BiRightArrowCircle />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/registration-info">
                    <a href="/#" alt="error">
                      registration <BiRightArrowCircle />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/links">
                    <a href="/#" alt="error">
                      others <BiRightArrowCircle />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col content-border">
              <Switch>
                <Route path="/vaccination">
                  <Suspense
                    fallback={
                      <div className="text-center text-primary">loading...</div>
                    }
                  >
                    <Covid19Info />
                  </Suspense>
                </Route>
                <Route path="/vaccineInfo">
                  <Suspense
                    fallback={
                      <div className="text-center text-primary">loading...</div>
                    }
                  >
                    <VaccineInfo />
                  </Suspense>
                </Route>
                <Route path="/registration-info">
                  <Suspense
                    fallback={
                      <div className="text-center text-primary">loading...</div>
                    }
                  >
                    <RegistrationInfo />
                  </Suspense>
                </Route>
                <Route path="/links">
                  {' '}
                  <Suspense
                    fallback={
                      <div className="text-center text-primary">loading...</div>
                    }
                  >
                    <Others />
                  </Suspense>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  )
}

export default Vaccination
