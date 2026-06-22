import { Link } from 'react-router-dom';
import './Header.module.css';

export default function Header() {
  return (
    <header className={require('./Header.module.css').header}>
      <div className={require('./Header.module.css').container}>
        <Link to="/" className={require('./Header.module.css').logo}>
          Poke & Panini
        </Link>
        <nav className={require('./Header.module.css').nav}>
          <Link to="/poke">Poke</Link>
          <Link to="/panino">Panino</Link>
          <Link to="/ricette">Ricette</Link>
          <Link to="/carrello">Carrello</Link>
        </nav>
      </div>
    </header>
  );
}
