import React, { FC } from 'react';
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
    </ModalProvider>
  </ThemeProvider>
);

export default App;
