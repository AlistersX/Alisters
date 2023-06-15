import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContent';
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);