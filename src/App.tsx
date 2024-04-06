import GlobalStyle from './theme/GlobalStyle';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Outlet } from 'react-router-dom';
import { MODAL_PORTAL_ID } from './components/ModalPortal';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';
import useUser from './utils/useUser';
import { userApi } from './api';

function App() {
  const { user, setUserCookie, resetUser } = useUser();

  useEffect(() => {
    if (user) {
      userApi
        .get(user.discordId)
        .then((data) => {
          setUserCookie({
            discordId: data.discordId,
            nickname: data.nickname,
            userId: data.userId,
          });
        })
        .catch(() => {
          resetUser();
        });
    }
  }, []);

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
