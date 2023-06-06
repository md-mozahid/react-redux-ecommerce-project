import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Header from './layout/Header'
import Home from './pages/Home'
import Products from './pages/Shop'
import AddProduct from './pages/addProduct'
import Login from './redux/login/Login'
import store from './redux/store.jsx'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
