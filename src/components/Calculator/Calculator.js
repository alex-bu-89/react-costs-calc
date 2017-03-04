// React
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../../store/calculator'

// CSS
import './Calculator.sass'

// Component
import products from './../../../config/products'
import { getProductsByCategories } from './Utils'
import StepZilla from './Wizard'
import Step1 from './steps/Step1'

class Calculator extends Component {

  render () {
    const data = {
      step1: getProductsByCategories(['boiler', 'boiler-piping'], products)
    }

    const steps = [
      { name: '1', component: <Step1 data={ data.step1 } /> }
    ]
    
    return (
      <section id='calculator' name='calculator'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Расчет цены</h2>
              <hr className='primary' />

              <div className='wizard step-progress row text-left'>
                <div className='col-8'>
                  <StepZilla steps={ steps } />
                </div>
                <div className='col-4'>test</div>
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
