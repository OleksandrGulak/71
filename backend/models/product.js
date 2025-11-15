import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }, // шлях до public/assets/images/products
  category: { type: String },
  stock: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.model('Product', productSchema)