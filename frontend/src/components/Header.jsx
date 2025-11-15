import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">🏠 Головна</Link>
        <Link to="/cart">🛒 Кошик</Link>
        <Link to="/profile">👤 Профіль</Link>
      </nav>
    </header>
  );
}