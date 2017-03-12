// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// CSS
import './Calculator.sass'

// Component
import StepZilla from './components/Wizard'
import Contacts from './components/Contacts'
import Estimate from './components/Estimate'
import Calculator from './Calculator'

class Wrapper extends Component {

  render () {
    // building steps for wizzard
    const steps = [
      { name: 'Калькулятор', component: <Calculator /> },
      { name: 'Ваши контакты', component: <Contacts /> },
      { name: 'Расчет сметы', component: <Estimate /> }
    ]

    return (
      <section id='calculator' name='calculator'>
        <div className='container'>
          <div className='col text-center'>
            <h2 className='section-heading'>Расчет цены</h2>
            <hr className='primary' />
          </div>
          <div className='wizard step-progress text-left col'>
            <StepZilla steps={ steps }
                       preventEnterSubmission={ true } />
          </div>
        </div>
      </section>
    )
  }
}

export default Wrapper
