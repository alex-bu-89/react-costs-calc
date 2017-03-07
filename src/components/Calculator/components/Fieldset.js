import React, { Component } from 'react'
import Product from './Product'

class Fieldset extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
    this.lastClickedElement = null
  }

  handleRadioClick(product, e){
    console.log(product);
    console.log(e.target);
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
                              handleRadioClick={ this.handleRadioClick }
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

export default Fieldset
