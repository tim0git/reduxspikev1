import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Counter_Button = ({action, handlePress}) => {
  return (
    <View style={styles.container}>
      <Button
        title={action}
        onPress={() => {
          handlePress(action);
        }}>
        {action}
      </Button>
    </View>
  );
};

export default Counter_Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
