import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
  return (
    <div className={require('./Home.module.css').home}>
      <section className={require('./Home.module.css').hero}>
        <h1>Benvenuto a Poke & Panini</h1>
        <p>Crea il tuo piatto perfetto</p>
      </section>

      <section className={require('./Home.module.css').cards}>
        <Link to="/poke" className={require('./Home.module.css').card}>
          <h2>🍱 Crea la tua Poke</h2>
          <p>Scegli base, proteine, topping e salsa</p>
        </Link>
        <Link to="/panino" className={require('./Home.module.css').card}>
          <h2>🥪 Crea il tuo Panino</h2>
          <p>Personalizza pane, carne, verdure e salse</p>
        </Link>
        <Link to="/ricette" className={require('./Home.module.css').card}>
          <h2>⭐ Creazioni del Brand</h2>
          <p>Scopri le ricette consigliate</p>
        </Link>
      </section>
    </div>
  );
}
