import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Header from './layout/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AddProduct from './pages/addProduct'
import Login from './redux/login/Login'
import store from './redux/store.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
