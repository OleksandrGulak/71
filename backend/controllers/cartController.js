import CartItem from '../models/cartItem.js'

// Додати або оновити товар у кошику
export async function addToCart(req, res) {
  const { productId, quantity } = req.body
  try {
    const item = await CartItem.findOneAndUpdate(
      { userId: req.user._id, productId },
      { $set: { quantity }, $setOnInsert: { userId: req.user._id, productId } },
      { upsert: true, new: true }
    )
    res.status(200).json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Отримати всі товари користувача
export async function getCart(req, res) {
  try {
    const items = await CartItem.find({ userId: req.user._id }).populate('productId')
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Видалити товар з кошика
export async function removeFromCart(req, res) {
  try {
    await CartItem.deleteOne({ _id: req.params.id, userId: req.user._id })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}