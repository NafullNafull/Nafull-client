import { PropsWithChildren } from 'react';
import GlobalStyle from './theme/GlobalStyle';

function App({ children }: PropsWithChildren) {
  return (
    <div className="App">
      <GlobalStyle />
      {/* TODO: Global style */}
      {children}
    </div>
  );
}

export default App;
