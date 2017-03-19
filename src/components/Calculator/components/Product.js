import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct, removeProduct, updateProduct } from '../../../store/calculator'
import _ from 'lodash'

const FORM_CHECKBOX = 'checkbox',
      FORM_RADIO = 'radio',
      FORM_NUMBER = 'number',
      MAX_INPUT = 10000

class Product extends Component {

  constructor(props) {
    super(props)

    this.product = props.product
    this._addProduct = props.addProduct
    this._removeProduct = props.removeProduct
    this._updateProduct = props.updateProduct

    // component state
    this.state = { checked: false, value: '' }
  }

  componentWillMount() {
    // change status of product if it exist in store
    const products = this.props.state.calculator.products
    products.map((product) => {
      if (product.sku === this.product.sku) {
        this.product = product
        this.setState({ checked: true, value: product.quantity })
      }
    })
  }

  /**
   * Handle radio button
   */
  handleRadioClick(e) {
    const products = this.props.state.calculator.products
    const index = _.indexOf(products, _.find(products, (product) => { return product.form.name === this.product.form.name }))

    // remove previous product
    if (index > -1) {
      this._removeProduct(index)
    }

    // add next product
    this._addProduct(this.product)
    this.setState({ checked: !this.state.checked })
  }

  /**
   * Handle checkbox
   */
  handleCheckboxClick(e) {
    const products = this.props.state.calculator.products
    const index = _.indexOf(products, _.find(products, (product) => { return product.sku === this.product.sku }))

    if (this.state.checked) {
      this._removeProduct(index)
      this.setState({ checked: !this.state.checked })
      return
    }

    this._addProduct(this.product)
    this.setState({ checked: !this.state.checked })
  }
  /**
   * Validate input
   */
  validateInput(e) {
    const value = e.target.value
    this.setState({ value: value })
  }

  /**
   * Handle input change event
   */
  handleInputChange(e) {
    const products = this.props.state.calculator.products
    const index = _.indexOf(products, _.find(products, (product) => { return product.sku === this.product.sku }))
    let value = e.target.value

    // exit if value is not a valid number
    if (isNaN(parseInt(value))) {
      this.setState({ value: value = 0 })
    }

    // parse string as number
    value = parseInt(value)

    // validate number
    if (value > MAX_INPUT) {
      this.setState({ value: value = MAX_INPUT })
    } else if (value < 0) {
      this.setState({ value: value = 0 })
    }

    // add value and final price to product
    this.setState({ value: value })
    this.product.quantity = value

    // remove product if value is null and already exist in the state
    if (value == 0) {
      if (index > -1) {
        this._removeProduct(index)
        return
      }
      return
    } else if (index > -1) {
      this._updateProduct(this.product, index)
      return
    }

    this._addProduct(this.product)
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
          <tr>
            <td>
              <label className='custom-control custom-checkbox' onChange={ this.handleCheckboxClick.bind(this) }>
                <input type='checkbox'
                       className='custom-control-input'
                       defaultChecked={ this.state.checked } />
                <span className='custom-control-indicator'></span>
                <span className='custom-control-description'>{ this.product.title }</span>
              </label>
            </td>
            <td className='product-price'>{ this.product.price.service } руб.</td>
            <td className='product-price'>{ this.product.price.regular } руб.</td>
          </tr>
        )

      case FORM_NUMBER:
        return (
          <tr>
            <td>
              <label className='col-form-label' htmlFor={ this.product.category.id + '-' + this.product.sku }>
                { this.product.title }
              </label>

              <input className='form-control'
                     type='number'
                     id={ this.product.category.id + '-' + this.product.sku }
                     min='1'
                     max='10000'
                     value={ this.state.value }
                     onBlur={ this.handleInputChange.bind(this) }
                     onChange={ this.validateInput.bind(this) } />

              <label className='' htmlFor={ this.product.category.id + '-' + this.product.sku }>
                { this.product.form.label }
              </label>
            </td>
            <td className='product-price'>{ this.product.price.service } руб.</td>
            <td className='product-price'>{ this.product.price.regular } руб.</td>
          </tr>
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
  addProduct,
  removeProduct,
  updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
