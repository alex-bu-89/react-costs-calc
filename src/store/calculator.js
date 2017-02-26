// ------------------------------------
// Constants
// ------------------------------------
export const TEST = 'TEST'

// ------------------------------------
// Actions
// ------------------------------------
export function test (value) {
  return {
    type    : TEST,
    payload : value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TEST] : (state, action) => {
    return {
      test: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  test: null
}

export default function calcReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
