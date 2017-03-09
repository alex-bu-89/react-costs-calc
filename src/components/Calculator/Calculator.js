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

class Calculator extends Component {

  constructor(props) {
    super(props)

    this.p = []
  }

  componentWillUpdate(nextProps) {
    this.p = nextProps.state.calculator.products
  }

  render () {

    // wizzard data
    const tabs = [
      { id: 'boiler', name: 'Кательная', data: getProductsByCategories(['boiler', 'boiler-piping'], products) },
      { id: 'chimney', name: 'Дымоход', data: getProductsByCategories(['chimney'], products) },
      { id: 'heating', name: 'Отопление', data: getProductsByCategories(['boiler-piping'], products) },
      { id: 'canalisation', name: 'Канализация', data: getProductsByCategories(['boiler'], products) },
      { id: 'water-supply', name: 'Водоснабжение', data: getProductsByCategories(['boiler-piping'], products) },
      { id: 'external-work', name: 'Наружные работы', data: getProductsByCategories(['boiler'], products) },
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
        <table className='table'>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
            {
              this.p.map((product, i) => {
                return (
                  <tr key={i}>
                    <td>{ product.sku }</td>
                    <td>{ product.title + ((product.form.value) ? ' x ' + product.form.value + ' ' + product.form.label : '') }</td>
                    <td>{ product.price.total + ' руб.' }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Calculator)
