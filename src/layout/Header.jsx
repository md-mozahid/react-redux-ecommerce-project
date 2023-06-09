import { FaCartPlus, FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const cart = useSelector((state) =>
    state.cart.reduce((acc, curr) => curr.productCount + acc, 0)
  )

  return (
    <>
      <div className="container">
        <section className="bg-yellow-500 p-5">
          <div className="flex justify-between items-center">
            <div className="col-span-3">
              <h1>E-commerce Site</h1>
            </div>
            <div className="flex items-center justify-center col-span-6">
              <select className="w-48 px-2 py-2 bg-sky-700 rounded-l-md">
                <option value="">All</option>
                <option value="">Shop1</option>
                <option value="">Shop2</option>
                <option value="">Shop3</option>
              </select>
              <input
                className="inputText rounded-none"
                type="text"
                placeholder="Search..."
              />
              <button className="btn rounded-r-md rounded-l-none">
                Search
              </button>
            </div>
            <div className="flex justify-between items-center gap-5 col-span-3">
              <Link
                to="/cart"
                className="text-2xl flex items-center justify-center gap-5 bg-sky-700 py-1 px-6 rounded-md">
                <i className="text-white">
                  <FaCartPlus />
                </i>
                <span className="text-rose-600">{cart || 0}</span>
              </Link>
              <Link to="/login">
                <i className="text-2xl">
                  <FaUserCircle />
                </i>
              </Link>
              <div className="flex flex-col justify-center items-left">
                <a>Login</a>
                <a>Register</a>
              </div>
            </div>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex justify-between items-center">
            <div>
              <h2>Category</h2>
            </div>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="add-product">Add Product</Link>
                </li>
                <li>
                  <a href="">Page</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Track your order</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header
