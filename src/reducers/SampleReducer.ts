import {SAMPLE_ACTION} from '../constants/ActionTypes';
import {changeMessage, ChangeMessageAction} from '../actions/SampleActions';

type AnyAction = ChangeMessageAction;

export default function message(state: any, action: AnyAction) {
  switch (action.type) {
    case 'App/CHANGE_MESSAGE':
      return action.payload;
    default:
      return 'default';
  }
}
