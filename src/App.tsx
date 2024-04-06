import { PropsWithChildren } from 'react';
import './App.css';

function App({ children }: PropsWithChildren) {
  return (
    <div className="App">
      {/* TODO: Global style */}
      {children}
    </div>
  );
}

export default App;
