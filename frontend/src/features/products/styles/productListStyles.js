export const homePageContainer = {
  height: 'calc(100vh - 167px)',
  minHeight: '500px',
  maxHeight: 'calc(100vh - 167px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8f9fa',
  padding: '2rem',
  overflowY: 'auto',
  marginBottom: '2rem',
};

export const productGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
  maxHeight: '70vh',
};

export const productCard = {
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: '1rem',
  textAlign: 'center',
};

export const productPrice = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

export const addToCartButton = {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export const homeContainer = {
  height: 'calc(100vh - 167px)',
  minHeight: '500px',
  maxHeight: 'calc(100vh - 167px)',
  width: '100%',
  maxWidth: '1200px',
};