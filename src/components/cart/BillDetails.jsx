import React from 'react'

const BillDetails = () => {
  return (
    <div className="border-2 border-slate-500 p-5 max-w-lg rounded-md ">
      <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div className='space-y-4'>
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            BDT <span>8000</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>
            BDT <span>0</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>VAT</p>
          <p>
            BDT <span>0</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p>
            BDT <span>8000</span>
          </p>
        </div>
      <button className="btn">PLACE ORDER</button>
      </div>
    </div>
  )
}

export default BillDetails
