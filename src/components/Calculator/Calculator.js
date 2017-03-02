import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../../store/calculator'
import Category from './Category'
import products from './../../../config/products'
import './Calculator.sass'

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
                {
                  products.map((category, i) => {
                    return (
                      <li className='nav-item' key={i}>
                        <a className={ 'nav-link ' + (i == 0 ? 'active' : '')} data-toggle='tab' href={ '#' + category.name } role='tab'>{ category.title }</a>
                      </li>
                    )
                  })
                }
              </ul>

              <div className='row text-justify'>
                <div className='col-7'>
                  <div className='tab-content'>
                    {
                      products.map((category, i) => {
                        return <Category category={ category } index={ i } key={ i }/>
                      })
                    }
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
