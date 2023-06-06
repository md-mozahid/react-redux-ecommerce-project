import {
  ADD_NEW_PRODUCT,
  PRODUCT_QTY_DECREMENT,
  PRODUCT_QTY_INCREMENT,
  QTY_UPDATE_WHEN_DELETE_CART_ITEM,
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

export const productUpdate_deleteCart = (productId) => {
  return {
    type: QTY_UPDATE_WHEN_DELETE_CART_ITEM,
    payload: productId,
  }
}
