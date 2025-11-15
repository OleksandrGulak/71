export const cartPageContainer = (isEmpty) => ({
  height: 'calc(100vh - 167px)',
  minHeight: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: isEmpty ? 'center' : 'flex-start',
  padding: '2rem',
  backgroundColor: '#f8f9fa',
  overflowY: 'auto',
});

export const cartContentWrapper = {
  width: '100%',
  maxWidth: '800px',
};

export const cartItemCard = {
  background: '#fff',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};