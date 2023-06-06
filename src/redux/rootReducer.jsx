import { combineReducers } from 'redux'
import cartReducer from './shoppingCart/cart/cartReducer'
import productReducer from './shoppingCart/product/productReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
})

export default rootReducer
