import React from 'react'
import { useSelector } from 'react-redux'
import BillDetails from './BillDetails'
import CartItem from './CartItem'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="text-3xl mb-8 font-bold">Shopping cart</h2>
        <div className="container  grid gap-2 px-2">
          <div className="space-y-6">
            {cart?.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
          <BillDetails />
        </div>
      </div>
    </main>
  )
}

export default Cart
