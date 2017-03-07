// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'
export const ADD_PRODUCT = 'ADD_PRODUCT'

// ------------------------------------
// Actions
// ------------------------------------
export function test (value) {
  return {
    type    : TEST,
    payload : value
  }
}

export function addProduct(product) {
  return (dispatch, getState) => {
    dispatch({
      type    : ADD_PRODUCT,
      payload : product
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TEST]: (state, action) => {
    return {
      test: action.payload
    }
  },

  [ADD_PRODUCT]: (state, action) => {
    return {
      ...state,
      products: [...state.products, action.payload]
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
