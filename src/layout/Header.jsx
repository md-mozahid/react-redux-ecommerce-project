import { FaCartPlus, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="container">
        <section className="bg-yellow-500 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h1>E-commerce Site</h1>
            </div>
            <div className="flex items-center justify-center gap-1">
              <div>
                <select name="" id="">
                  <option value="">Shop1</option>
                  <option value="">Shop2</option>
                  <option value="">Shop3</option>
                </select>
              </div>
              <div>
                <input type="text" />
                <button>Search</button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <Link to="/cart">
                <i className="text-2xl">
                  <FaCartPlus />
                </i>
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
                  <Link to="/shop">Products</Link>
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
