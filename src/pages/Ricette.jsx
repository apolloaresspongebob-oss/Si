import './Page.module.css';

export default function Ricette() {
  return (
    <div className={require('./Page.module.css').page}>
      <h1>Creazioni del Brand</h1>
      <p>Scopri le ricette consigliate (FE-012)</p>
      <div className={require('./Page.module.css').placeholder}>
        Elenco ricette con card, filtri e dettaglio
      </div>
    </div>
  );
}
