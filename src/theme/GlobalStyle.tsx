// GlobalStyle.jsx

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardVariable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'SansitaOne';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url('fonts/SansitaOne.woff') format('woff');
  }

  body {
    font-family: "PretendardVariable", "Arial", sans-serif;
    color: ${({ theme }) => theme.color.gray_900};
    line-height: 1.5;
  }
  *:focus-visible {
    outline: none;
  }
`;

export type FontFamilyVariants = 'PretendardVariable' | 'SansitaOne';
export default GlobalStyle;
