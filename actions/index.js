import {COUNTER} from '../constants/index';

exports.increaseCounter = (payload) => ({
  type: COUNTER.INCREASE,
  payload,
});

exports.decreaseCounter = () => ({
  type: COUNTER.DECREASE,
  payload: 1,
});
