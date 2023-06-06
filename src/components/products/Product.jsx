import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/shoppingCart/cart/Actions'
import { productQtyDecrement } from '../../redux/shoppingCart/product/Actions'

const Product = ({ productItem }) => {
  const {
    productId,
    productName,
    productCategory,
    productImageUrl,
    productPrice,
    productQuantity,
  } = productItem

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productItem, productCount: 1 }))
    dispatch(productQtyDecrement(productId))
  }
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-slate-300 rounded-md">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          className="object-cover object-center w-full h-full block"
          src={productImageUrl}
          alt=""
        />
      </a>
      <div className="mt-4">
        <h4 className="text-gray-900 title-font text-2xl font-medium">
          {productName}
        </h4>
        <p className="text-gray-500 text-base tracking-widest title-font mb-1">
          {productCategory}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-base font-semibold ">
            BDT <span>{productPrice}</span>
          </p>
          <p className="text-base font-semibold ">
            QTY <span>{productQuantity}</span>
          </p>
        </div>
        <button
          className="btn btn-fw disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!productQuantity}
          onClick={handleAddToCart}>
          {!productQuantity ? 'Sold Out' : 'Add To Cart'}
        </button>
      </div>
    </div>
  )
}

export default Product
