import React from 'react';
import { Provider } from 'react-redux';
import Catalog from './pages/Catalog';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
