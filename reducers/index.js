import {combineReducers} from 'redux';

import countReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
