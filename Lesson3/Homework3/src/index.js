import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Theme } from './theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

