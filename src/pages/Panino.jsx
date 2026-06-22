import { useConfigurator } from '../context/ConfiguratorContext';
import { useEffect } from 'react';
import './Page.module.css';

export default function Panino() {
  const { initialize, type } = useConfigurator();

  useEffect(() => {
    if (type !== 'panino') {
      initialize('panino');
    }
  }, []);

  return (
    <div className={require('./Page.module.css').page}>
      <h1>Configuratore Panino</h1>
      <p>Qui potrai configurare il tuo panino (FE-010)</p>
      <div className={require('./Page.module.css').placeholder}>
        Step 1: Dimensione e pane<br />
        Step 2: Proteina<br />
        Step 3: Formaggi e verdure<br />
        Step 4: Extra e salse + Riepilogo
      </div>
    </div>
  );
}
