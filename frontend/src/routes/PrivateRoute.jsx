import { Navigate } from 'react-router-dom'
import { getToken } from '../features/auth/lib/token'

export default function PrivateRoute({ children }) {
  return getToken() ? children : <Navigate to="/login" />
}