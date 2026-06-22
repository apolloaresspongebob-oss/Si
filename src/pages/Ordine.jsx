import { useParams } from 'react-router-dom';
import './Page.module.css';

export default function Ordine() {
  const { id } = useParams();

  return (
    <div className={require('./Page.module.css').page}>
      <h1>Conferma Ordine #{id}</h1>
      <p>Pagina di conferma ordine (FE-014)</p>
      <div className={require('./Page.module.css').placeholder}>
        Riepilogo ordine con stato e dettagli
      </div>
    </div>
  );
}
