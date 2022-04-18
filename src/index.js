import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MiCube from './MiCube';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiCube />
    <App />
  </React.StrictMode>
);
