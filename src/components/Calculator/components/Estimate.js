import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-scroll'
import _ from 'lodash'
import { getProductsByCategories, formatMoney } from './../utils'

class Estimate extends Component {

  constructor(props) {
    super(props)

    this.categories = []
    this.price = {
      products_price: this.props.state.calculator.products_price,
      service_price: this.props.state.calculator.service_price,
      total_price: this.props.state.calculator.total_price
    }

    this.state = {
      categories: [],
      price: {}
    }
  }

  componentWillMount() {
    console.log(this.props.state.calculator);
    this.setState({
      categories: this.getProductsByCategories(this.props.state.calculator.products),
      price: {
        products_price: this.props.state.calculator.products_price,
        service_price: this.props.state.calculator.service_price,
        total_price: this.props.state.calculator.total_price
      }
    })
  }

  componentWillUpdate(nextProps) {
    this.setState({
      categories: this.getProductsByCategories(nextProps.state.calculator.products),
      price: {
        products_price: nextProps.state.calculator.products_price,
        service_price: nextProps.state.calculator.service_price,
        total_price: nextProps.state.calculator.total_price
      }
    })
  }

 /**
  * Get products by categories
  * @param  {array} products
  * @return {array} sort products
  */
  getProductsByCategories(products) {
    let categories = _.uniq(_.map(products, (product) => { return product.category.id }))
    let sortProducts = getProductsByCategories(categories, products)

    return sortProducts
  }

  render() {
    return (
      <div className='container'>
        <div className='tab-wrapper'>
          <table className='table prouct-table estimate-table'>
              <thead>
                <tr>
                  <th className='product-title'></th>
                  <th className='product-price'>Стоимость работ</th>
                  <th className='product-price'>Стоимость оборудования</th>
                </tr>
              </thead>
              {
                this.state.categories.map((category, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td className='product-category' colSpan='3'><strong>{ category.title }</strong></td>
                      </tr>

                      {
                        category.products.map((product, y) => {
                          return (
                            <tr className='products' key={y}>
                              <td>{ product.title + ((product.quantity > 1) ? ' x ' + product.quantity + ' ' + product.form.label : '') }</td>
                              <td className='text-center'>{ product.price.service + ' руб.' }</td>
                              <td className='text-center'>{ product.price.regular * product.quantity + ' руб.' }</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  )
                })
              }
              <tbody>
                <tr className='text-center price-total'>
                  <td colSpan='3'>
                    <hr />
                    <p>Стоимость оборудования: { formatMoney(this.state.price.products_price) } руб.</p>
                    <p>Стоимость работ: { formatMoney(this.state.price.service_price) } руб.</p>
                    <p className='lead'>Общая стоимость: { formatMoney(this.state.price.total_price) } руб.</p>
                  </td>
                </tr>
            </tbody>
          </table>

          <div className='container text-center control-estimate'>
            <Link to='calculator' spy={true} smooth={true} offset={0} duration={1000}>
              <button type='button'
                      className='btn btn-primary btn-outline-secondary'
                      onClick={ () => this.props.jumpToStep(0) }>Вернуться к расчету</button>
            </Link>

            <button type='button'
                    className='btn btn-primary btn-outline-secondary'>Распечатать</button>

            <button type='button'
                    className='btn btn-primary'>Оставить заявку</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return { state: state } }

export default connect(mapStateToProps)(Estimate)
