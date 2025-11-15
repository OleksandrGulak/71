import { getToken } from '../../auth/lib/token'

export async function getCart() {
  const res = await fetch('/api/cart', {
    headers: { Authorization: `Bearer ${getToken()}` }
  })

  if (!res.ok) throw new Error('Не вдалося отримати кошик')
  return await res.json()
}