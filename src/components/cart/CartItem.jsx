import React from 'react'
import { useDispatch } from 'react-redux'
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from '../../redux/shoppingCart/cart/Actions'
import {
  productQtyDecrement,
  productQtyIncrement,
  productUpdate_deleteCart,
} from '../../redux/shoppingCart/product/Actions'

const CartItem = ({ item }) => {
  const {
    productId,
    productImageUrl,
    productName,
    productCategory,
    productPrice,
    productQuantity,
    productCount,
  } = item

  const dispatch = useDispatch()

  const incrementQty = () => {
    dispatch(incrementCartItem(productId))
    dispatch(productQtyDecrement(productId))
  }
  const decrementQty = () => {
    dispatch(productQtyIncrement(productId))
    dispatch(decrementCartItem(productId))
  }

  const handleDeleteItem = () => {
    dispatch(deleteCartItem(productId))
    dispatch(productUpdate_deleteCart({productId, productCount}))
  }

  return (
    <div className="grid-cols-12 rounded-md border border-slate-500 p-4 md:grid ">
      <div className="flex items-center col-span-6 space-x-6 ">
        <img className="w-20" src={productImageUrl} alt="" />
        <div className="space-y-2">
          <h4>{productName}</h4>
          <p>{productCategory}</p>
          <p>{productPrice}</p>
        </div>
      </div>
      <div className="col-span-4 flex items-center">
        <button className="mr-8 text-2xl" onClick={incrementQty}>
          +
        </button>
        <span>{productCount}</span>
        <button className="mx-8 text-2xl" onClick={decrementQty}>
          -
        </button>
        <p>
          Total BDT : <span>{productPrice * productCount}</span>
        </p>
      </div>
      <div className="con-span-2 flex items-center">
        <button onClick={handleDeleteItem}>delete</button>
      </div>
    </div>
  )
}

export default CartItem
