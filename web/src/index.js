import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importar reportWebVitals (viene con CRA)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento
reportWebVitals();