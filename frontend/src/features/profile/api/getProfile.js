import { getToken } from '../../auth/lib/token'

export async function getProfile() {
  const res = await fetch('/api/profile', {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || 'Unauthorized')
  }

  return await res.json() // { user }
}