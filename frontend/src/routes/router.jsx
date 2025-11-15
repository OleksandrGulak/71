import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import ProfilePage from '../pages/ProfilePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import PrivateRoute from './PrivateRoute.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/cart" element={
        <PrivateRoute>
          <CartPage />
        </PrivateRoute>
      } />
      <Route path="/profile" element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}