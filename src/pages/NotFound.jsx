import { Link } from 'react-router-dom';
import './Page.module.css';

export default function NotFound() {
  return (
    <div className={require('./Page.module.css').page}>
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <Link to="/">Torna alla home</Link>
    </div>
  );
}
