import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct,  } from '../../../store/calculator'

const FORM_CHECKBOX = 'checkbox',
      FORM_RADIO = 'radio',
      FORM_NUMBER = 'number'

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }

    this.product = props.product
    this._addProduct = props.addProduct
  }

  handleRadioClick(e) {
    this._addProduct(this.product)
    this.setState({ checked: !this.state.checked })
  }

  handleCheckboxClick(e) {
    this._addProduct(this.product, this.state.checked)
    this.setState({ checked: !this.state.checked })
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
            <span className='custom-control-description'>{ this.product.title + ' ' + this.state.checked}</span>
          </label>
        )
      case FORM_NUMBER:
        return (
          <div className='form-group row'>
            <label className='col col-form-label text-right' htmlFor='example-number-input'>{ this.product.title }</label>
            <input className='' type='number' id='example-number-input' />
            <label className='col col-form-label' htmlFor='example-number-input'>{ this.product.form.label }</label>
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
