import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import Counter_Display from './components/Counter/Counter_Display';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <Counter_Display />
      </SafeAreaView>
    </>
  );
};

export default App;
