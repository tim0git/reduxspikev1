import {COUNTER} from '../constants/index';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case COUNTER.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case COUNTER.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default countReducer;
