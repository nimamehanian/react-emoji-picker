import { createGlobalStyle } from 'styled-components';
import { $charcoal } from '@styles/colors';

const GlobalStyles = createGlobalStyle`
  html, body {
    display: flex;
    justify-content: center;
    margin: 60px;
    padding: 0px;
    outline: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: ${$charcoal};
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
