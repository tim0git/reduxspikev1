import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Counter_Button from './Counter_Button';

const Counter_Display = () => {
  const [count, setCount] = useState(1);

  const handlePress = (e) => {
    switch (e) {
      case 'increase':
        setCount(count + 1);
        break;
      case 'decrease':
        setCount(count - 1);
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Counter_Button action={'decrease'} handlePress={handlePress} />
        <Text style={styles.count}>{count}</Text>
        <Counter_Button action={'increase'} handlePress={handlePress} />
      </View>
    </>
  );
};

export default Counter_Display;

const styles = StyleSheet.create({
  count: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 200,
  },
});
