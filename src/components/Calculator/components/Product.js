import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct,  } from '../../../store/calculator'

const FORM_CHECKBOX = 'checkbox',
      FORM_RADIO = 'radio',
      FORM_NUMBER = 'number'

class Product extends Component {

  constructor(props) {
    super(props)

    // component state
    this.state = { checked: false, value: '' }

    this.product = props.product
    this._addProduct = props.addProduct
  }

  componentWillMount() {
    // change status of product if it exist in store
    const products = this.props.state.calculator.products
    products.map((product) => {
      if (product.sku === this.product.sku) {
        this.setState({ checked: true, value: product.form.value })
      }
    })
  }

  handleRadioClick(e) {
    this.product.price.total = parseFloat(this.product.price.regular)

    this._addProduct(this.product)
    this.setState({ checked: !this.state.checked })
  }

  handleCheckboxClick(e) {
    this.product.price.total = parseFloat(this.product.price.regular)

    this._addProduct(this.product, this.state.checked)
    this.setState({ checked: !this.state.checked })
  }

  handleInputChange(e) {
    let value = e.target.value

    if (value) {
      value = parseFloat(value)
      this.setState({ value: value })
    }

    // add value
    this.product.form.value = value

    // add price
    if (value) {
      this.product.price.total = parseFloat(value) * parseFloat(this.product.price.regular)
    } else {
      this.product.price.total = ''
    }

    this._addProduct(this.product, this.state.checked)
  }

  render() {
    switch (this.product.form.type) {

      case FORM_RADIO:
        return (
          <label className='custom-control custom-radio' onChange={ this.handleRadioClick.bind(this) }>

            <input id={ 'radio' + this.product.sku }
                   name={ this.product.form.name }
                   type='radio'
                   className='custom-control-input'
                   defaultChecked={ this.state.checked } />

            <span className='custom-control-indicator' />
            <span className='custom-control-description'>{ this.product.title }</span>
          </label>
        )

      case FORM_CHECKBOX:
        return (
          <label className='custom-control custom-checkbox' onChange={ this.handleCheckboxClick.bind(this) }>
            <input type='checkbox'
                   className='custom-control-input'
                   defaultChecked={ this.state.checked } />
            <span className='custom-control-indicator'></span>
            <span className='custom-control-description'>{ this.product.title + ' ' + this.state.checked}</span>
          </label>
        )

      case FORM_NUMBER:
        return (
          <div className='form-group row'>
            <label className='col col-form-label' htmlFor={ this.product.category.id + '-' + this.product.sku }>
              { this.product.title }
            </label>

            <input className='col'
                   type='number'
                   id={ this.product.category.id + '-' + this.product.sku }
                   onBlur={ this.handleInputChange.bind(this) }
                   min='1'
                   max='10000'
                   defaultValue={ this.state.value } />

            <label className='col col-form-label' htmlFor={ this.product.category.id + '-' + this.product.sku }>
              { this.product.form.label }
            </label>
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

const mapStateToProps = (state) => { return { state: state } }

const mapDispatchToProps = {
  addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
