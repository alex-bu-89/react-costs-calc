import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../../store/calculator'
import StepZilla from './Wizard'
import Step1 from './steps/Step1'
import products from './../../../config/products'
import './Calculator.sass'

class Calculator extends Component {

  render () {

    const data = {
      step1: products.filter((category) => { if (category.id === 'boiler') { return category } })
    }

    const steps = [
      { name: 'Кательная', component: <Step1 data={ data.step1 } /> }
    ]


    // products.map((category, i) => {
    //                 return { name: category.title, component: <Category category={ category } index={ i } key={ i } /> }
    //               })

    return (
      <section id='calculator' name='calculator'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading'>Расчет цены</h2>
              <hr className='primary' />

              <div className='wizard step-progress row'>
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
