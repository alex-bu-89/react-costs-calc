import React, { Component } from 'react'
import { addProduct } from '../../../store/calculator'


const FORM_CHECKBOX = 'checkbox',
      FORM_RADIO = 'radio',
      FORM_NUMBER = 'number'

class Product extends Component {

  constructor(props) {
    super(props)

    this.product = props.product
    this._handleRadioClick = props.handleRadioClick
    this._handleCheckboxClick = props.handleCheckboxClick
  }

  handleRadioClick(e) {
    this._handleRadioClick(this.product, e)
  }

  handleCheckboxClick(e) {
    this._handleCheckboxClick(this.product, e)
  }

  render() {
    switch (this.product.form.type) {
      case FORM_RADIO:
        return (
          <label className='custom-control custom-radio' onChange={ this.handleRadioClick.bind(this) }>
            <input id={ 'radio' + this.product.sku } name={ this.product.form.name } type='radio' className='custom-control-input' />
            <span className='custom-control-indicator' />
            <span className='custom-control-description'>{ this.product.title }</span>
          </label>
        )
      case FORM_CHECKBOX:
        return (
          <label className='custom-control custom-checkbox' onChange={ this.handleCheckboxClick.bind(this) }>
            <input type='checkbox' className='custom-control-input' />
            <span className='custom-control-indicator'></span>
            <span className='custom-control-description'>{ this.product.title }</span>
          </label>
        )
      case FORM_NUMBER:
        return (
          <div className='form-group row'>
            <div className='col-10'>
              <input className='form-control' type='number' id='example-number-input' />
            </div>
            <div className='col-2'>
              <label htmlFor='example-number-input'>Test</label>
            </div>
          </div>
        )
      default:
        return null
    }
  }
}

Product.propTypes = {
  product: React.PropTypes.object.isRequired
}

export default Product
