import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import NavigationBar from './components/NavigationBar';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes history={history} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
