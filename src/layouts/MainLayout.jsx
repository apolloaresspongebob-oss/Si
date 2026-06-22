import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MiniCart from '../components/MiniCart';
import './MainLayout.module.css';

export default function MainLayout() {
  return (
    <div className={require('./MainLayout.module.css').layout}>
      <Header />
      <main className={require('./MainLayout.module.css').main}>
        <Outlet />
      </main>
      <MiniCart />
    </div>
  );
}
