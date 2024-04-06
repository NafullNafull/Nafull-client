// GlobalStyle.jsx

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  body {
    font-family: "Pretendard Variable", "Arial", sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
