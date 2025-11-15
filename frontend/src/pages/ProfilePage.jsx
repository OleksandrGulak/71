import { useEffect, useState } from 'react'
import { getProfile } from '../features/profile/api/getProfile'
import { toast } from 'react-toastify'

export default function ProfilePage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getProfile()
      .then(data => setUser(data.user))
      .catch(err => toast.error(err.message))
  }, [])

  if (!user) return <p>Завантаження...</p>

  return (
    <div>
      <h2>Профіль</h2>
      <p>Ім'я: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}