import ProductList from '../features/products/components/ProductList.jsx';
import { homePageContainer } from '../features/products/styles/productListStyles.js';
import { homeContainer } from '../features/products/styles/productListStyles.js';

export default function HomePage() {
  return (
    <main style={homePageContainer}>
      <div style={homeContainer}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛍️ Наші товари</h1>
        <ProductList />
      </div>
    </main>
  );
}