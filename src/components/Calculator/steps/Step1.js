import React, { Component } from 'react'
import Product from './../Product'

class Step1 extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
  }

  render() {
    return (
      <form>
        {
          this.data.map((category, i) => {
            return (
              <fieldset key={ i }>
                <h6>{ category.title }</h6>

                {
                  category.items.map((product, y) => {
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

Step1.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default Step1
