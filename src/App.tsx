import GlobalStyle from './theme/GlobalStyle';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
          <GlobalStyle />
          <Outlet />
        </StyleSheetManager>
      </ThemeProvider>
    </div>
  );
}

export default App;
