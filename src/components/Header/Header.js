import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.sass'

export const Header = () => (
  <div id="header" className="site-wrapper">
    <div className="site-wrapper-inner">
      <div className="cover-container">
        <nav id="navigation" className="navbar navbar-toggleable-md navbar-inverse fixed-top">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"><h3>лого</h3></a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">О нас</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Услуги</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Наши работы</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="inner cover">
          <h1 className="cover-heading">Сантехника для загородного дома</h1>
          <p className="lead">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
          </p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-outline-secondary"><i className="fa fa-pencil fa-fw"></i> Задать вопрос</a>
          </p>
        </div>

        <div className="mastfoot">
          <div className="inner">
            <a href="#service" className="arrow bounce"></a>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Header
