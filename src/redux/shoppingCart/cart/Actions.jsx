import {
  ADD_TO_CART,
  CART_ITEM_DECREMENT,
  CART_ITEM_INCREMENT,
  DELETE_CART_ITEM,
} from './ActionType'

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}
export const incrementCartItem = (id) => {
  return {
    type: CART_ITEM_INCREMENT,
    payload: id,
  }
}
export const decrementCartItem = (id) => {
  return {
    type: CART_ITEM_DECREMENT,
    payload: id,
  }
}
export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: id,
  }
}
