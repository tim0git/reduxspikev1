import {COUNTER} from '../constants/index';

exports.increaseCounter = (payload) => ({
  type: COUNTER.INCREASE,
  payload,
});

exports.decreaseCounter = (payload) => ({
  type: COUNTER.DECREASE,
  payload,
});
