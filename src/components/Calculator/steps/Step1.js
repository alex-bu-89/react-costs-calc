import React, { Component } from 'react'
import Product from './../Product'

class Step1 extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
  }

  render() {
    return (
      <div className='container'>
        <form className='row'>
          {
            this.data.map((category, i) => {
              return (
                <div className='col-6' key={ i }>
                  <h6>{ category.title }</h6>

                  {
                    category.products.map((product, y) => {
                      return <Product product={ product } key={ y } />
                    })
                  }

                </div>
              )
            })
          }
        </form>
      </div>
    )
  }
}

Step1.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Step1
