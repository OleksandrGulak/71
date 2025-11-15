import { useEffect, useState } from 'react'
import { getCart } from '../features/cart/api/getCart'
import { addToCart } from '../features/cart/api/addToCart'
import { removeFromCart } from '../features/cart/api/removeFromCart'
import { toast } from 'react-toastify'

export default function CartPage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    loadCart()
  }, [])

  async function loadCart() {
    try {
      const data = await getCart()
      setItems(data)
    } catch (err) {
      toast.error(err.message)
    }
  }

  async function handleQuantityChange(id, quantity) {
    try {
      const item = items.find(i => i._id === id)
      await addToCart(item.productId._id, quantity)
      loadCart()
    } catch (err) {
      toast.error(err.message)
    }
  }

  async function handleRemove(id) {
    try {
      await removeFromCart(id)
      loadCart()
    } catch (err) {
      toast.error(err.message)
    }
  }

  if (!items.length) return <p>Кошик порожній</p>

  return (
    <div>
      <h2>Мій кошик</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h4>{item.productId.title}</h4>
            <p>Ціна: {item.productId.price} грн</p>
            <p>Кількість:
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => handleQuantityChange(item._id, parseInt(e.target.value))}
              />
            </p>
            <button onClick={() => handleRemove(item._id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  )
}