import {takeEvery, put} from 'redux-saga/effects';

function* workerSaga() {
  console.log('Hello');
  yield put({type: 'DECREASE_COUNTER'});
}

// watcher saga
function* rootSaga() {
  yield takeEvery('INCREMENT_COUNTER', workerSaga);
}

export default rootSaga;

// watcher saga --> action --> worker saga
