import React from 'react'
import { useRouteMatch } from 'react-router-dom'

function RegistrationInfo() {
  const match = useRouteMatch()
  console.warn(match)
  return (
    <div>
      <h3 className="text-center bg-primary">How to get vaccine</h3>
      <h4>senior citizen (>45)</h4>
      <p>
        India on Tuesday threw open covid-19 vaccines to those above 45 years
        beginning 1 April, vastly expanding the immunization drive so far
        limited to priority workers, elderly, and those suffering from
        comorbidities.
      </p>
      <p>
        The decision made at a Union cabinet meeting comes amid a resurgence in
        covid-19 cases. So far, people above 45 could get vaccinated if they
        were suffering from comorbidities, such as high blood pressure or
        diabetes.
      </p>
      <p>
        The next phase of the world's largest Covid-19 vaccination drive for
        people above the age of 45 started 1 April. Citizens can register, book
        an appointment for vaccination, anytime and anywhere, using the Co-WIN
        platform, or the Aarogya Setu app. According to the Health Ministry,
        citizens can also visit their nearest vaccination centre after 3 pm and
        get on-site registration done.
      </p>
      <h4>18+ age group</h4>
      <p>
        All citizens above the age of 18 years can register themselves for
        getting Covid-19 vaccine jabs starting 4 pm today as the government
        gears up to launch the third phase of vaccination drive from 1 May.
        "Registration for 18 plus to begin on
        <a target="_blank" rel="noreferrer" href="http://cowin.gov.in">
          http://cowin.gov.in
        </a>
        and
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mygov.in/aarogya-setu-app/"
        >
          Aarogya Setu App
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.umang.gov.in/landing/"
        >
          UMANG App
        </a>{' '}
        at 4 PM on 28th April.
      </p>
    </div>
  )
}

export default RegistrationInfo
