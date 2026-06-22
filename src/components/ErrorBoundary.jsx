import { useErrorHandler } from 'react-error-boundary';
import { useEffect } from 'react';
import './ErrorBoundary.module.css';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className={require('./ErrorBoundary.module.css').container}>
      <h1>Oops! Qualcosa è andato storto</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Riprova</button>
    </div>
  );
}

export function ErrorBoundaryWrapper({ children }) {
  return <>{children}</>;
}
