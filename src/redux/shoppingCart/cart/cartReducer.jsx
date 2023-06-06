import {
  ADD_TO_CART,
  CART_ITEM_DECREMENT,
  CART_ITEM_INCREMENT,
  DELETE_CART_ITEM,
} from './ActionType'
import initialState from './InitialState'

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_TO_CART:
      const itemId = payload.productId
      const existingItem = state.find((item) => item.productId === itemId)

      if (existingItem) {
        existingItem.productCount++
      } else {
        state.push(payload)
      }

      return [
        ...state.map((item) => {
          if (item.productId === itemId) {
            item.productQuantity--
          }
          return item
        }),
      ]
      
    // delete from cart item
    case DELETE_CART_ITEM:
      return state.filter((item) => item.productId !== payload)

    case CART_ITEM_INCREMENT:
      return [
        ...state.map((item) => {
          if (item.productId === payload) {
            if (item.productQuantity > 0) {
              item.productCount++
              item.productQuantity--
            }
          }
          return item
        }),
      ]

    case CART_ITEM_DECREMENT:
      return [
        ...state.map((item) => {
          if (item.productId === payload) {
            if (item.productCount > 1) {
              item.productCount--
              item.productQuantity++
            }
          }
          return item
        }),
      ]

    default:
      return state
  }
}

export default reducer
