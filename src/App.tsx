import GlobalStyle from './theme/GlobalStyle';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Outlet } from 'react-router-dom';
import { MODAL_PORTAL_ID } from './components/ModalPortal';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
          <GlobalStyle />
          <Layout.Container>
            <div id={MODAL_PORTAL_ID} />
            <Layout.Main>
              <Outlet />
            </Layout.Main>
          </Layout.Container>
        </StyleSheetManager>
      </ThemeProvider>
    </div>
  );
}

export default App;
