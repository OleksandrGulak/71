import { getToken } from '../../auth/lib/token'

export async function addToCart(productId, quantity) {
  const res = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ productId, quantity })
  })

  if (!res.ok) throw new Error('Не вдалося додати до кошика')
  return await res.json()
}