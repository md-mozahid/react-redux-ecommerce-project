import {
  ADD_NEW_PRODUCT,
  PRODUCT_QTY_DECREMENT,
  PRODUCT_QTY_INCREMENT,
  QTY_UPDATE_WHEN_DELETE_CART_ITEM,
} from './ActionType'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload]

    case PRODUCT_QTY_INCREMENT:
      return [
        ...state.map((item) => {
          if (item.productId === action.payload) {
            item.productQuantity++
          }
          return item
        }),
      ]

    case PRODUCT_QTY_DECREMENT:
      return [
        ...state.map((item) => {
          if (item.productId === action.payload) {
            // hence 1 > 0 --, 0 > 0 then stop decrement
            if (item.productQuantity > 0) {
              item.productQuantity--
            }
          }
          return item
        }),
      ]

    case QTY_UPDATE_WHEN_DELETE_CART_ITEM:
      return [
        ...state.map((item) => {
          if (item.productId === action.payload.productId) {
            item.productQuantity += action.payload.productCount
          }
          return item
        }),
      ]

    default:
      return state
  }
}

export default reducer
