import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers/RootReducer';
import rootEpic from './epics/RootEpic';
import { Provider } from 'react-redux';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Hello compiler='TypeScript' framework='React' />
  </Provider>,
  document.getElementById('example')
);
