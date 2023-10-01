import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-primaria: rgba(58, 57, 103, 1);
    --cor-secundaria: rgba(247, 131, 16, 1);
    --cor-terciaria: rgba(242, 114, 165);
    --cor-quaternaria: rgba(240, 208, 236, 1);
    --font-main: 'Montserrat', sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
