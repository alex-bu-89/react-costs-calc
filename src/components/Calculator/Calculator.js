// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// CSS
import './Calculator.sass'

// Component
import products from './../../../config/products'
import { getProductsByCategories } from './utils'
import StepZilla from './components/Wizard'
import Fieldset from './components/Fieldset'
import Estimate from './components/Estimate'

class Calculator extends Component {

  constructor(props) {
    super(props)
  }

  render () {

    // wizzard data
    const tabs = [
      { id: 'boiler', name: 'Кательная', data: getProductsByCategories(['boiler', 'boiler-piping'], products) },
      { id: 'chimney', name: 'Дымоход', data: getProductsByCategories(['chimney'], products) },
      { id: 'heating', name: 'Отопление', data: getProductsByCategories(['heating'], products) },
      { id: 'canalisation', name: 'Канализация', data: getProductsByCategories(['canalisation'], products) },
      { id: 'water-system', name: 'Водоснабжение', data: getProductsByCategories(['water-system', 'water-treatment'], products) },
      { id: 'external-work', name: 'Наружные работы', data: getProductsByCategories(['external-works'], products) },
    ]

    return (
      <section id='calculator' name='calculator'>
        <ul className='nav nav-tabs' role='tablist'>
          {
            tabs.map((tab, i) => {
              return(
                <li className='nav-item' key={ i }>
                  <a className={ 'nav-link ' + ((i === 0)? 'active' : '') } data-toggle='tab' href={ '#' + tab.id } role='tab'>{ tab.name }</a>
                </li>
              )
            })
          }
        </ul>

        <div className='tab-content'>
          {
            tabs.map((tab, i) => {
              return (
                <div className={ 'tab-pane ' + ((i === 0)? 'active' : '') } id={ tab.id } role='tabpanel' key={ i } >
                  <Fieldset
                    data={ tab.data } />
                </div>
              )
            })
          }
        </div>
        <div className='container text-center'>
          <button type='button'
                  className='btn btn-primary'
                  onClick={ () => this.props.jumpToStep(1) }>Получить смету</button>
        </div>
        <Estimate />
      </section>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Calculator)
