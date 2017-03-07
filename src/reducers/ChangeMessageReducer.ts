import {combineReducers} from 'redux';
import {CHANGE_MESSAGE_START, CHANGE_MESSAGE_END} from '../constants/ActionTypes';
import {ActionTypes} from '../actions/ActionUtil';
import {ChangeMessageActions} from '../actions/SampleActions';

const message = (state: string = '', action: ChangeMessageActions) => {
  switch (action.type) {
    case ActionTypes.CHANGE_MESSAGE_START:
      return state;
    case ActionTypes.CHANGE_MESSAGE_DONE:
      console.log('hur');
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  message
});
