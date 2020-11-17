import React from 'react';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

import { TodosProvider } from './hooks/todos';

const App: React.FC = () => (
  <>
    <TodosProvider>
      <Home />
    </TodosProvider>
    <GlobalStyles />
  </>
);

export default App;
