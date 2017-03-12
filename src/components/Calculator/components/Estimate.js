import React, { Component } from 'react'
import { connect } from 'react-redux'

class Estimate extends Component {

  constructor(props) {
    super(props)

    this.products = []
    this.price = {
      products_price: this.props.state.calculator.products_price,
      service_price: this.props.state.calculator.service_price,
      total_price: this.props.state.calculator.total_price
    }
  }

  componentWillUpdate(nextProps) {
    this.products = nextProps.state.calculator.products

    this.price = {
      products_price: nextProps.state.calculator.products_price,
      service_price: nextProps.state.calculator.service_price,
      total_price: nextProps.state.calculator.total_price
    }
  }

  componentWillMount() {
    this.products = this.props.state.calculator.products

    this.price = {
      products_price: this.props.state.calculator.products_price,
      service_price: this.props.state.calculator.service_price,
      total_price: this.props.state.calculator.total_price
    }
  }

  render() {
    return (
      <table className='table'>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          {
            this.products.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{ product.sku }</td>
                  <td>{ product.title + ((product.form.value) ? ' x ' + product.form.value + ' ' + product.form.label : '') }</td>
                  <td>{ product.price.total + ' руб.' }</td>
                </tr>
              )
            })
          }
          <tr className='text-right'>
            <td colSpan='3'>
              <p>Стоимость материалов: { this.price.products_price }</p>
              <p>Стоимость работ: { this.price.service_price }</p>
              <p><strong>Общая стоимость: { this.price.total_price }</strong></p>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Estimate)
