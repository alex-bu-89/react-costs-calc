import React from 'react'
import './Navigation.scss'

export const Navigation = () => (
  <div id="navigation">
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Сантехник.ком</a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Navigation
