import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Page.module.css';

export default function Carrello() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <div className={require('./Page.module.css').page}>
        <h1>Carrello vuoto</h1>
        <p>Non hai ancora aggiunto articoli al carrello.</p>
        <Link to="/">Torna alla home</Link>
      </div>
    );
  }

  return (
    <div className={require('./Page.module.css').page}>
      <h1>Carrello ({items.length})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.localId}>
            {item.name || 'Articolo'} - €{item.price || 0}
          </li>
        ))}
      </ul>
      <p>Totale: €{total.toFixed(2)}</p>
      <p>Checkout form (FE-014)</p>
    </div>
  );
}
