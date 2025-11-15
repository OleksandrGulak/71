import { getToken } from '../../auth/lib/token'

export async function removeFromCart(id) {
  const res = await fetch(`/api/cart/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  if (!res.ok) throw new Error('Не вдалося видалити товар з кошика')
}