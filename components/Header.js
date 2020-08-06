import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

function Header(props) {
  return (
    <View>
      <Text style={styles.container}>Redux Spike</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Header;
