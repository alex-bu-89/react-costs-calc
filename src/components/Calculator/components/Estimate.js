import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  }

  componentWillUpdate(nextProps) {
    this.categories = this.getProductsByCategories(nextProps.state.calculator.products)

    this.price = {
      products_price: nextProps.state.calculator.products_price,
      service_price: nextProps.state.calculator.service_price,
      total_price: nextProps.state.calculator.total_price
    }
  }

  componentWillMount() {
    this.categories = this.getProductsByCategories(this.props.state.calculator.products)

    this.price = {
      products_price: this.props.state.calculator.products_price,
      service_price: this.props.state.calculator.service_price,
      total_price: this.props.state.calculator.total_price
    }
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
                this.categories.map((category, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td className='product-category' colSpan='3'><strong>{ category.title }</strong></td>
                      </tr>

                      {
                        category.products.map((product, y) => {
                          return (
                            <tr className='products' key={y}>
                              <td>{ product.title + ((product.form.value) ? ' x ' + product.form.value + ' ' + product.form.label : '') }</td>
                              <td className='text-center'>{ product.price.service + ' руб.' }</td>
                              <td className='text-center'>{ product.price.total + ' руб.' }</td>
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
                    <p>Стоимость оборудования: { formatMoney(this.price.products_price) } руб.</p>
                    <p>Стоимость работ: { formatMoney(this.price.service_price) } руб.</p>
                    <p className='lead'>Общая стоимость: { formatMoney(this.price.total_price) } руб.</p>
                  </td>
                </tr>
            </tbody>
          </table>

          <div className='container text-center control-estimate'>
            <button type='button'
                    className='btn btn-primary'
                    onClick={ () => this.props.jumpToStep(0) }>Вернуться к расчету</button>

            <button type='button'
                    className='btn btn-primary'>Распечатать</button>

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
