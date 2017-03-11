import React, { Component } from 'react'
import { connect } from 'react-redux'

class Estimate extends Component {

  constructor(props) {
    super(props)

    this.products = []
  }

  componentWillUpdate(nextProps) {
    this.products = nextProps.state.calculator.products
  }

  componentWillMount() {
    this.products = this.props.state.calculator.products
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
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Estimate)
