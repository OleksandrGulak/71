import { useState } from 'react'
import { registerUser } from '../features/auth/api/register'
import { saveToken } from '../features/auth/lib/token'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { token } = await registerUser({ email, password, name })
      saveToken(token)
      toast.success('Реєстрація успішна')
      navigate('/profile')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Реєстрація</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ім'я" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" required />
      <button type="submit">Зареєструватися</button>
    </form>
  )
}