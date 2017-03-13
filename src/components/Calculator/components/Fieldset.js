import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'

class Fieldset extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
  }

  render() {
    return (
      <div className='tab-wrapper'>
        {
          this.data.map((category, i) => {
            return (
              <table className='table prouct-table' key={ i }>
                <thead>
                  <tr>
                    <th>Наименование работ</th>
                    <th>Стоимость работ</th>
                    <th>Стоимость оборудования</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan='3'><h6>{ category.title }</h6></td>
                  </tr>
                  {
                    category.products.map((product, y) => {
                      return <Product
                                product={ product }
                                key={ y } />
                    })
                  }
                </tbody>
              </table>
            )
          })
        }
      </div>
    )
  }
}

Fieldset.propTypes = {
  data: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Fieldset)
