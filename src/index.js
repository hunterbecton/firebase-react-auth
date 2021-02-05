import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { ProvideAuth } from './hooks/useAuth';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import Theme from './styles/theme';
import StyledToast from './components/Toast/StyledToast';

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <StyledToast />
        <App />
      </ThemeProvider>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
