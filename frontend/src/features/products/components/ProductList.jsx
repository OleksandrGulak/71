import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/hooks.js";
import { fetchProducts } from '../model/productsSlice.js';
import { addToCart } from '../../cart/model/cartSlice.js';
import {
  productGrid,
  productCard,
  productPrice,
  addToCartButton,
} from '../styles/productListStyles.js';
import Button from '../../../components/Button.jsx';
import { toast } from 'react-toastify';

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: 'red' }}>Помилка: {error}</p>;

  return (
    <div style={productGrid}>
      {items.map((product) => (
        <div key={product.id} style={productCard}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '6px',
              marginBottom: '1rem',
            }}
          />
          <h3>{product.name}</h3>
          <p style={productPrice}>{product.price} ₴</p>
          <Button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.name} додано в кошик!`);
            }}
            style={addToCartButton}
          >
            Додати в кошик
          </Button>
        </div>
      ))}
    </div>
  );
}