import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../../store/calculator'
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
              <button onClick={ this.props.test }>TEST</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

const mapDispatchToProps = {
  test : () => test('test'),
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
