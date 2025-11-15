import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockProducts } from '../api/mockProducts.js';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {

  return mockProducts;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;