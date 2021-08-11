import React from 'react';
import Navigation from './src/route/navigation';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/helper/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  )
}

export default App;
