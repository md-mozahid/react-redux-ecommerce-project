import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shoppingCart/product/Actions'
import { useNavigate } from 'react-router-dom'

const ProductInputs = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState({
    productId: '',
    productName: '',
    productCategory: '',
    productImageUrl: '',
    productPrice: '',
    productQuantity: '',
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

   const navigate = useNavigate()

  const handleSubmit = (e) => {
    const newProduct = {
      ...products,
      productId: Math.random().toString(16).slice(2),
    }
    e.preventDefault()
    dispatch(addProduct(newProduct))
    navigate('/products')
  }
 
  return (
    <>
      <div className="container">
        <div className="text-center w-96 mx-auto">
          <h2 className="text-3xl text-center py-5">Add New Product</h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <input
              className="inputText"
              type="text"
              placeholder="Product name"
              name="productName"
              // required
              value={productName}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="text"
              placeholder="Product category"
              name="productCategory"
              // required
              value={productCategory}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="text"
              placeholder="Product image"
              name="productImageUrl"
              // required
              value={productImageUrl}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="number"
              placeholder="Product price"
              name="productPrice"
              // required
              value={productPrice}
              onChange={handleChange}
            />
            <input
              className="inputText"
              type="number"
              placeholder="Product quantity"
              name="productQuantity"
              // required
              value={productQuantity}
              onChange={handleChange}
            />
            <button className="btn btn-primary btn-fw" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductInputs
