// GlobalStyle.jsx

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardVariable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  @font-face {
    font-family: 'SansitaOne';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/SansitaOne.woff') format('woff');
  }

  @font-face {
    font-family: 'OmyuPretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "PretendardVariable", "OmyuPretty" "Arial", sans-serif;
    color: ${({ theme }) => theme.color.gray_900};
    line-height: 1.5;
  }
  *:focus-visible {
    outline: none;
  }

  input {
    appearance: none;
    margin: 0;
  }
`;

export type FontFamilyVariants = 'PretendardVariable' | 'SansitaOne' | 'OmyuPretty';
export default GlobalStyle;
