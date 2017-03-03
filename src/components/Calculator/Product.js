import React, { Component } from 'react'

const FORM_CHECKBOX = 'checkbox',
      FORM_RADIO = 'radio',
      FORM_NUMBER = 'number'

class Product extends Component {

  constructor(props) {
    super(props)

    this.product = props.product
  }

  handleClick(e) {
    console.log(this.product);
  }

  render() {
    switch (this.product.type) {
      case FORM_RADIO:
        return (
          <div className='form-group row'>
            <label className='custom-control custom-radio col'>
              <input id='radio1' name='radio' type='radio' className='custom-control-input' onChange={ this.handleClick.bind(this) } />
              <span className='custom-control-indicator' />
              <span className='custom-control-description' onChange={ this.handleClick.bind(this) }> { this.product.title } </span>
            </label>
          </div>
        )
      case FORM_CHECKBOX:
        return (
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">{ this.product.title }</span>
          </label>
        )
      case FORM_NUMBER:
        return (
          <div className='form-group row'>
            <div className='col-10'>
              <input className="form-control" type="number" id="example-number-input" />
            </div>
            <div className='col-2'>
              <label htmlFor="example-number-input">Test</label>
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
