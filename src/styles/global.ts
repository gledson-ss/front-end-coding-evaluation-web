import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body{
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
