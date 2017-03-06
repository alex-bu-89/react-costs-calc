import React, { Component } from 'react'
import Product from './Product'

class Category extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
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
                    return <Product product={ product } key={ y } />
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

Category.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Category
