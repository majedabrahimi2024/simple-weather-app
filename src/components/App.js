import React from 'react';
import Weather from './Weather';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Weather/>
      </>
    </Provider>
  );
}

export default App;
