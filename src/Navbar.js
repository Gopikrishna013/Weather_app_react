import React from 'react'

import './Nav.css'

// import {Link } from 'react-router-dom';

function Navbar() {
  return (
     
<div className='head-head'>

<nav className="navbar navbar-expand-lg navbar-light  text-light mx-5">
  <div className="container-fluid">
    {/* <a class="navbar-brand text-light"  href="#">Gopikrishna</a> */}
    <button className="navbar-toggler text-light bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav " id='nav-head'>
      <li className="nav-item">
          <a className="nav-link active text-secondary" id='nav-list' aria-current="page" href="#">Weather</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id='nav-list' aria-current="page" href="https://www.google.com/maps/d/viewer?mid=1nTszhpyBg90vbokPo7U2xtTtXOo&hl=en&ll=-3.81666561775622e-14%2C-83.58741749999996&z=1">Maps</a>
        </li>
		<li className="nav-item">
          <a className="nav-link active" id='nav-list' aria-current="page" href="https://www.weather.gov/forecastmaps">Forecast</a>
        </li>
		<li className="nav-item">
          <a className="nav-link active" id='nav-list' aria-current="page" href="https://www.bbc.com/news/topics/cx1m7zg05wpt">News</a>
        </li>
		<li className="nav-item">
          <a className="nav-link active" id='nav-list' aria-current="page" href="https://www.indiatoday.in/weather/hyderabad-weather-forecast-today">Links</a>
        </li>
    <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
























     {/* <ul id='nav-head'>
      <li ><Link id='nav-list' to='/home'>Home</Link></li>
      <li ><Link id='nav-list' to='/Calculator'>Calculator</Link></li>
      <li ><Link id='nav-list' to='/TextUtils'>Text Utils</Link></li>
      <li ><Link id='nav-list' to='/contact'>Products</Link></li>
    </ul> */}
    
</div>
  )
}

export default Navbar
