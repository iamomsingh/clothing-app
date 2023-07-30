import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { theme } from './styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


reportWebVitals();
