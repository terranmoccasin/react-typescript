import {SagaIterator} from 'redux-saga';
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import {SAMPLE_ACTION} from '../constants/ActionTypes';
import {changeMessage} from '../actions/SampleActions';

function* changeMessageSaga() {
  yield delay(1000);
  yield put(changeMessage('hi'));
}

function* watchIncrementAsync() {
  yield takeEvery(SAMPLE_ACTION, changeMessageSaga)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}