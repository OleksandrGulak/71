import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/model/productsSlice.js';
import cartReducer from '../features/cart/model/cartSlice.js';
import authReducer from '../features/auth/model/authSlice.js';
import profileReducer from '../features/profile/model/profileSlice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});