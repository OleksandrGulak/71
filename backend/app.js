import express from 'express'
import productRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'
import profileRoutes from './routes/profile.js'
import cartRoutes from './routes/cart.js'

const app = express()
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/cart', cartRoutes)

export default app