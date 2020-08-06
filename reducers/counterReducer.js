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
        count: state.count + 1,
      };
    case COUNTER.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default countReducer;
