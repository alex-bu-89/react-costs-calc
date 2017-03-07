import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../../store/calculator'
import Product from './Product'

class Fieldset extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
    this._addProduct = props.addProduct
  }

  handleRadioClick(product, e){
    this._addProduct(product)
  }

  render() {
    return (
      <form className='d-flex align-items-stretch'>
        {
          this.data.map((category, i) => {
            return (
              <fieldset key={ i }>
                <h6>{ category.title }</h6>

                {
                  category.products.map((product, y) => {
                    return <Product
                              product={ product }
                              handleRadioClick={ this.handleRadioClick.bind(this) }
                              key={ y } />
                  })
                }

              </fieldset>
            )
          })
        }
      </form>
    )
  }
}

Fieldset.propTypes = {
  data: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => { return { state: state } }

const mapDispatchToProps = {
  addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset)
