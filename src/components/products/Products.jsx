import { useSelector } from 'react-redux'
import Product from './Product'
import EmptyCartImage from '../../assets/img/cart-empty.png'

const Products = () => {
  const products = useSelector((state) => state.products)

  return (
    <>
      <main className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.length === 0 && (
              <>
                <div>
                  <p>currently you have no product | you can add product</p>
                  <img src={EmptyCartImage} alt="EmptyCartImage" />
                </div>
              </>
            )}

            {products.map((singleProduct) => (
              <Product
                key={singleProduct.productId}
                productItem={singleProduct}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Products
