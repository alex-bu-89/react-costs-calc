// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

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

export function addProduct(product) {
  return (dispatch, getState) => {

    // const products = getState().calculator.products
    // const index = _.indexOf(products, product)

    // // remove prev. product if radio button
    // if (product.form.type === 'radio') {
    //   const match = _.find(products, (p) => {
    //     return p.form.name === product.form.name
    //   })
    //   const index = _.indexOf(products, match)
    //
    //   if (typeof match !== 'undefined' && index !== -1) {
    //     dispatch(_removeProduct(match, index))
    //   }
    // }
    //
    // // remove product while unchecking
    // if (product.form.type === 'checkbox' && checked === true) {
    //   dispatch(_removeProduct(product, index))
    //   return
    // }
    //
    // // update product if value changed
    // if (product.form.type === 'number') {
    //
    //   if (product.form.value === '' || product.form.value == '0') {
    //     if (index > -1) {
    //       dispatch(_removeProduct(product, index))
    //     }
    //
    //     // do nothing if value is empty
    //     return
    //
    //   } else if (product.form.value) {
    //     if (index > -1) {
    //       dispatch(_updateProduct(product, index))
    //     }
    //   }
    //
    //
    //   if (index > -1) { return }
    // }

    dispatch(_addProduct(product))
  }
}

export function removeProduct(index) {
  return (dispatch, getState) => {
    dispatch(_removeProduct(index))
  }
}

export function updateProduct(product, index) {
  return (dispatch, getState) => {
    dispatch(_updateProduct(product, index))
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
    let products = state.products.slice()
    products[action.payload.index] = action.payload.product

    return {
      ...state,
      products: products
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
