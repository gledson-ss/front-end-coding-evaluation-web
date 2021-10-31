import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ModalProvider>
  </ThemeProvider>
);

export default App;
