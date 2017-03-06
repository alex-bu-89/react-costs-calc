// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// CSS
import './Calculator.sass'

// Component
import products from './../../../config/products'
import { getProductsByCategories } from './Utils'
import StepZilla from './Wizard'
import Category from './Category'

class Calculator extends Component {

  render () {

    // wizzard data
    const stepsData = [
      { name: 'Кательная', data: getProductsByCategories(['boiler', 'boiler-piping'], products) },
      { name: 'Дымоход', data: getProductsByCategories(['boiler'], products) },
      { name: 'Отопление', data: getProductsByCategories(['boiler-piping'], products) },
      { name: 'Канализация', data: getProductsByCategories(['boiler'], products) },
      { name: 'Водоснабжение', data: getProductsByCategories(['boiler-piping'], products) },
      { name: 'Наружные работы', data: getProductsByCategories(['boiler'], products) },
    ]

    // building steps for wizzard
    const steps = stepsData.map((stepData, i) => {
      return { name: stepData.name, component: <Category data={ stepData.data } key={i} /> }
    })

    return (
      <section id='calculator' name='calculator'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Расчет цены</h2>
              <hr className='primary' />

              <div className='wizard step-progress row text-left'>
                <StepZilla steps={ steps } />
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Calculator)
