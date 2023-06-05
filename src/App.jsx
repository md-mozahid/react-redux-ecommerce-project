import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AddProduct from './pages/addProduct'
import Cart from './components/cart/Cart'
import Login from './redux/login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
