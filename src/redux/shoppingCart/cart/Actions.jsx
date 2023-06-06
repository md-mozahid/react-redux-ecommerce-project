import { ADD_TO_CART } from './ActionType'

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  }
}
