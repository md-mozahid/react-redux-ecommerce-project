import React from 'react'

const Product = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-slate-300 rounded-md">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          className="object-cover object-center w-full h-full block"
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
      </a>
      <div className="mt-4">
        <h4 className="text-gray-900 title-font text-2xl font-medium">
          product name
        </h4>
        <p className="text-gray-500 text-base tracking-widest title-font mb-1">
          category
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-base ">BDT 500</p>
          <p className="text-base ">QTY 5</p>
        </div>
        <button className="btn btn-fw">Add To Cart</button>
      </div>
    </div>
  )
}

export default Product
