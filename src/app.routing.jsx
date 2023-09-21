import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import ProfilePage from './pages/ProfilePage'
import CheckoutPage from './pages/CheckoutPage'
// import ProductPage from './pages/ProductPage'

const AppRoutes = ({user, setUser}) => {
  return (
    <Routes>
        <Route path='/' element={<Homepage user={user} />} />
        <Route path='/register' element={<RegisterPage setUser={setUser} />} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        {/* <Route path='/product' element={<ProductPage />} /> */}
        {/* <Route path='*' element={<h1>Error 404: Page not found</h1>} /> */}
    </Routes>
  )
}

export default AppRoutes