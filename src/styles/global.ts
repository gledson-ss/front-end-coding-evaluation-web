import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  html, body{
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};

    @media (max-width: 174px){
      overflow-x: scroll;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  svg{ 
    padding: 0;
    margin: 0;
  }
`;
