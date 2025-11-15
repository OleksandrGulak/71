import express from 'express'
import auth from '../middleware/auth.js'
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js'

const router = express.Router()

router.use(auth)

router.get('/', getCart)
router.post('/', addToCart)
router.delete('/:id', removeFromCart)

export default router