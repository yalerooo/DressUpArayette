// index.js (CÓDIGO CORRECTO PARA REACT 18)
import React from 'react';
import ReactDOM from 'react-dom/client'; // ¡IMPORTANTE: IMPORTAR DESDE 'react-dom/client'!
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea una "root" de renderizado
root.render( // Usa root.render en lugar de ReactDOM.render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);