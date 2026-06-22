import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './MiniCart.module.css';

export default function MiniCart() {
  const { items } = useCart();
  const count = items.length;

  return (
    <Link to="/carrello" className={require('./MiniCart.module.css').miniCart}>
      <span className={require('./MiniCart.module.css').icon}>🛒</span>
      {count > 0 && <span className={require('./MiniCart.module.css').badge}>{count}</span>}
    </Link>
  );
}
