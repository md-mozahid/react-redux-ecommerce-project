import {
  ADD_NEW_PRODUCT,
  PRODUCT_COUNT,
  PRODUCT_QTY_DECREMENT,
  PRODUCT_QTY_INCREMENT,
} from './ActionType'

export const addProduct = (newProduct) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: newProduct,
  }
}

export const productQtyIncrement = (productId) => {
  return {
    type: PRODUCT_QTY_INCREMENT,
    payload: productId,
  }
}

export const productQtyDecrement = (productId) => {
  return {
    type: PRODUCT_QTY_DECREMENT,
    payload: productId,
  }
}

export const productCount = (productId) => {
  return {
    type: PRODUCT_COUNT,
    payload: productId,
  }
}
