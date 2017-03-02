import React, { Component } from 'react'
import Product from './Product'

class Category extends Component {

  constructor(props) {
    super(props)

    this.category = props.category
    this.index = props.index
  }

  render() {
    return (
      <div className={ 'tab-pane ' + (this.index == 0 ? 'active' : '')} id={ this.category.name } role='tabpanel'>
        <form className='container'>
          {
            this.category.items.map((product, i) => {
              return <Product product={ product } key={ i }/>
            })
          }
        </form>
      </div>
    )
  }
}

Category.propTypes = {
  category: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired
}

export default Category
