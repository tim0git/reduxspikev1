import React from 'react';

import {
  SafeAreaView,
  // StyleSheet,
  // ScrollView,
  // View,
  // Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import Counter_Display from './components/Counter/Counter_Display';

import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header />
          <Counter_Display />
        </SafeAreaView>
      </>
    </Provider>
  );
};

export default App;
