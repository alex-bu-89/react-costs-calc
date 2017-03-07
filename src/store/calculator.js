import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// ------------------------------------
// Actions
// ------------------------------------
function _addProduct (product) {
  return {
    type    : ADD_PRODUCT,
    payload : product
  }
}

function _removeProduct (product, index) {
  return {
    type    : REMOVE_PRODUCT,
    payload : { product: product, index: index }
  }
}

export function addProduct(product) {
  return (dispatch, getState) => {
    const products = getState().calculator.products

    // check radio names
    if (product.form.name !== undefined) {
      const match = _.find(products, (p) => {
        return p.form.name === product.form.name
      })

      const index = _.indexOf(products, match)

      if (typeof match !== 'undefined' && index !== -1) {
        dispatch(_removeProduct(match, index))
      }
    }

    dispatch(_addProduct(product))
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
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  products: [],
  price: 0,
  service_price: 0,
  total_price: 0,
  isEmpty: true
}

export default function calcReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
