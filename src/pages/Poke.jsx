import { useConfigurator } from '../context/ConfiguratorContext';
import { useEffect } from 'react';
import './Page.module.css';

export default function Poke() {
  const { initialize, type } = useConfigurator();

  useEffect(() => {
    if (type !== 'poke') {
      initialize('poke');
    }
  }, []);

  return (
    <div className={require('./Page.module.css').page}>
      <h1>Configuratore Poke</h1>
      <p>Qui potrai configurare la tua poke (FE-009)</p>
      <div className={require('./Page.module.css').placeholder}>
        Step 1: Dimensione e base<br />
        Step 2: Proteine<br />
        Step 3: Topping<br />
        Step 4: Salsa + Riepilogo
      </div>
    </div>
  );
}
