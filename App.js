/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import Nav from './src/Nav';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
};


export default App;
