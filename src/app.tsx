import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

import { createStore, applyMiddleware } from 'redux';
import sampleReducer from './reducers/SampleReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(sampleReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Hello compiler='TypeScript' framework='React' />
  </Provider>,
  document.getElementById('example')
);
