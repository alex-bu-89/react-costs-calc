import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { Link } from 'react-scroll'

class Fieldset extends Component {

  constructor(props) {
    super(props)

    this.data = props.data
    this.jumpToStep = props.jumpToStep
  }

  render() {
    return (
      <div className='tab-wrapper'>
        <table className='table prouct-table'>
          <thead>
            <tr>
              <th className='product-title'>Наименование работ</th>
              <th className='product-price'>Стоимость работ</th>
              <th className='product-price'>Стоимость оборудования</th>
            </tr>
          </thead>
          {
            this.data.map((category, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td className='product-category' colSpan='3'>{ category.title }</td>
                  </tr>
                  {
                    category.products.map((product, y) => {
                      return <Product
                                product={ product }
                                key={ y } />
                    })
                  }
                </tbody>
              )
            })
          }
        </table>
        <div className='container text-center control-calc-box'>
          <Link to='calculator' spy={true} smooth={true} offset={0} duration={1000}>
            <button type='button'
                    className='btn btn-primary'
                    onClick={ () => this.jumpToStep(1) }>Рассчитать смету</button>
          </Link>
        </div>
      </div>
    )
  }
}

Fieldset.propTypes = {
  data: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Fieldset)
