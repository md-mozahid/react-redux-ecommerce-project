import { useState } from 'react'

const ProductInputs = () => {
  const [products, setProducts] = useState({
    productId: '',
    productName: '',
    productCategory: '',
    productImageUrl: '',
    productPrice: '',
    productQuantity: '',
    productCount: '',
  })
  const {
    productName,
    productCategory,
    productImageUrl,
    productPrice,
    productQuantity,
  } = products

  const handleChange = (e) => {
    setProducts((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(products)
  }
  return (
    <>
      <div className="container">
        <div className="text-center w-96 mx-auto">
          <h2 className="text-3xl text-center py-5">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="inputText"
              type="text"
              placeholder="Product name"
              name="productName"
              required
              value={productName}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="text"
              placeholder="Product category"
              name="productCategory"
              required
              value={productCategory}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="text"
              placeholder="Product image"
              name="productImageUrl"
              required
              value={productImageUrl}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="number"
              placeholder="Product price"
              name="productPrice"
              required
              value={productPrice}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="number"
              placeholder="Product quantity"
              name="productQuantity"
              required
              value={productQuantity}
              onChange={handleChange}
            />
            <button className='btn btn-primary' type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductInputs
