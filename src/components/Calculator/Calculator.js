import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../../store/calculator'
import './Calculator.sass'

const calculatorConf = [
  {
    category: 'boiler',
    title: 'Выбор котла',
    products: [
      { title: 'Газовый одноконтурный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Газовый двухконтурный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Электрический', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Дизельный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Твердотопливный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Бойлер косвенного нагрева до 200л', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Бойлер косвенного нагрева более 200л', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Энергоаккумулятор до 500л', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' }
    ]
  },
  {
    category: 'test',
    title: 'Test',
    products: [
      { title: 'Газовый одноконтурный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' },
      { title: 'Газовый двухконтурный', price: 1000, service_price: 100, type: { form: 'checkbox' }, desc: '', img_src: '#' }
    ]
  }
]

class Calculator extends Component {

  render () {
    return (
      <section id='calculator' name='calculator'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Расчет цены</h2>
              <hr className='primary' />

              <ul className='nav nav-tabs' role='tablist'>
                <li className='nav-item'>
                  <a className='nav-link active' data-toggle='tab' href='#home' role='tab'>Выбор котла</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-toggle='tab' href='#profile' role='tab'>Выбор домохода</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' data-toggle='tab' href='#messages' role='tab'>Тест</a>
                </li>
              </ul>

              <div className='row text-justify'>
                <div className='col-7'>
                  <div className='tab-content'>
                    <div className='tab-pane active' id='home' role='tabpanel'>
                      <form>
                        <label className='custom-control custom-radio'>
                          <input id='radio1' name='radio' type='radio' className='custom-control-input' />
                          <span className='custom-control-indicator' />
                          <span className='custom-control-description'>Toggle this custom radio</span>
                        </label>
                      </form>
                    </div>
                    <div className='tab-pane' id='profile' role='tabpanel'>2</div>
                    <div className='tab-pane' id='messages' role='tabpanel'>3</div>
                  </div>
                </div>
                <div className='col-5'>
                  Итого
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

const mapDispatchToProps = {
  test : () => test('test')
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
