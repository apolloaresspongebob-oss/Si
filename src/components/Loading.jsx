import './Loading.module.css';

export default function Loading() {
  return (
    <div className={require('./Loading.module.css').loading}>
      <div className={require('./Loading.module.css').spinner}></div>
      <p>Caricamento...</p>
    </div>
  );
}
