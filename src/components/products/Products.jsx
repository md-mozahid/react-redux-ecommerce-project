import Product from './Product'

const Products = () => {
  return (
    <>
      <main className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Product />
          </div>
        </div>
      </main>
    </>
  )
}

export default Products
