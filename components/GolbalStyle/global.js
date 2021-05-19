import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
    font-family: 'Poppins', 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #fff;
    min-height: 100%;
    min-width: 100vw;
  }

  @media screen and (max-width: 480px) { font-size: .5em; min-width: 100%;}
  @media screen and (max-width: 768px) { font-size: .7em; min-width: 100%;}
`;

export default GlobalStyle;