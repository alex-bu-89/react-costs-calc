import _ from 'lodash'
import { getProductPrice } from '../components/Calculator/utils'

// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST',
             ADD_PRODUCT = 'ADD_PRODUCT',
             REMOVE_PRODUCT = 'REMOVE_PRODUCT',
             UPDATE_PRODUCT = 'UPDATE_PRODUCT',
             UPDATE_PRICE = 'UPDATE_PRICE'

// ------------------------------------
// Actions
// ------------------------------------
function _addProduct (product) {
  return {
    type    : ADD_PRODUCT,
    payload : product
  }
}

function _removeProduct (index) {
  return {
    type    : REMOVE_PRODUCT,
    payload : { index: index }
  }
}

function _updateProduct (product, index) {
  return {
    type    : UPDATE_PRODUCT,
    payload : { product: product, index: index }
  }
}

function _updatePrice (price) {
  return {
    type    : UPDATE_PRICE,
    payload : { price: price }
  }
}

export function addProduct(product) {
  return (dispatch, getState) => {
    dispatch(_addProduct(product))

    const price = getProductPrice(getState().calculator.products)
    dispatch(_updatePrice(price))
  }
}

export function removeProduct(index) {
  return (dispatch, getState) => {
    dispatch(_removeProduct(index))

    const price = getProductPrice(getState().calculator.products)
    dispatch(_updatePrice(price))
  }
}

export function updateProduct(product, index) {
  return (dispatch, getState) => {
    dispatch(_updateProduct(product, index))

    const price = getProductPrice(getState().calculator.products)
    dispatch(_updatePrice(price))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_PRODUCT]: (state, action) => {
    return {
      ...state,
      products: [...state.products, action.payload]
    }
  },

  [REMOVE_PRODUCT]: (state, action) => {
    return {
      ...state,
      products: [
        ...state.products.slice(0, action.payload.index),
        ...state.products.slice(action.payload.index + 1)
      ]
    }
  },

  [UPDATE_PRODUCT]: (state, action) => {
    let products = state.products.slice() // immutable
    products[action.payload.index] = action.payload.product

    return {
      ...state,
      products: products
    }
  },

  [UPDATE_PRICE]: (state, action) => {
    return {
      ...state,
      products_price: action.payload.price.products_price,
      service_price: action.payload.price.service_price,
      total_price: action.payload.price.total_price
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  products: [],
  products_price: 0,
  service_price: 0,
  total_price: 0,
  isEmpty: true
}

export default function calcReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
