import React, {Component} from 'react'
import './About.sass'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">О нас</h2>
              <hr className="primary"/>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">2007 год</h4>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 2007 год</small></p>
                  </div>
                  <div className="timeline-body">
                    <p>Началом деятельности можно считать 2007 год, когда несколько человек ушли из компании Сантехмастер и начали работать самостоятельно. Основной деятельностью было оказание услуг по сантехнике в Ленинградской области – отопление, водоснабжение, канализация в частных домах и квартирах.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">2008 год</h4>
                  </div>
                  <div className="timeline-body">
                    <p>В 2008 году открыли розничный магазин. Основной ассортимент магазина – инженерная сантехника (трубы, фитинги, насосы, котлы, отопительные приборы) а также сантехнические приборы (смесители, ванные, раковины, душевые кабины, унитазы).</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">2009 год</h4>
                  </div>
                  <div className="timeline-body">
                    <p>С 2009 года предлагаем услугу по комплектованию строительных объектов всем необходимым для отопления, водоснабжения, канализации. Осуществляем доставку на объект.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">2015 год</h4>
                  </div>
                  <div className="timeline-body">
                    <p>Небольшой но опытный коллектив за несколько лет выполнил работы более чем на ста загородных коттеджах.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default About
