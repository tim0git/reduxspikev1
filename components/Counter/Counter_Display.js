/* eslint-disable no-shadow */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Counter_Button from './Counter_Button';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from '../../actions/index';

const Counter_Display = ({
  count: {count},
  increaseCounter,
  decreaseCounter,
}) => {
  const handlePress = (e) => {
    switch (e) {
      case 'increase':
        increaseCounter(1);
        break;
      case 'decrease':
        decreaseCounter(1);
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

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (number) => dispatch(increaseCounter(number)),
  decreaseCounter: (number) => dispatch(decreaseCounter(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter_Display);
