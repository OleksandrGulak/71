import { useState } from 'react'
import { loginUser } from '../features/auth/api/login'
import { saveToken } from '../features/auth/lib/token'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { token } = await loginUser({ email, password })
      saveToken(token)
      toast.success('Успішний вхід')
      navigate('/profile')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вхід</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" required />
      <button type="submit">Увійти</button>
    </form>
  )
}