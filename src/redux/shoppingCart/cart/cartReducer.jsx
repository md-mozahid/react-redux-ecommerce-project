import { ADD_TO_CART } from './ActionType'
import initialState from './InitialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    default:
      return state
  }
}

export default reducer
