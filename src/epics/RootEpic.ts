import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import {ActionsObservable, combineEpics} from 'redux-observable';
import {MiddlewareAPI} from 'redux';
import {ActionTypes} from '../actions/ActionUtil';

const changeMessageEpic = (action$: ActionsObservable<any>, store: MiddlewareAPI<any>) => {
  return action$.ofType(ActionTypes.CHANGE_MESSAGE_START)
      .delay(1000)
      .map(action => ({type: ActionTypes.CHANGE_MESSAGE_DONE, payload: action.payload}));
}

export default combineEpics(
  changeMessageEpic
);
