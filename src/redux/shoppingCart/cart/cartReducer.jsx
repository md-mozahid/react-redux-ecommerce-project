import { ADD_TO_CART } from './ActionType'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state

    default:
      return state
  }
}

export default reducer
