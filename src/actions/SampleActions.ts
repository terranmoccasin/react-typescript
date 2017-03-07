import {CHANGE_MESSAGE_START} from '../constants/ActionTypes';
import {ActionTypes, Action} from './ActionUtil';

export class ChangeMessageStart implements Action<string> {
  type = ActionTypes.CHANGE_MESSAGE_START
  payload: string
}

export const changeMessage = (message: string): Action<string> =>
    ({type: ActionTypes.CHANGE_MESSAGE_START, payload: message});

export class ChangeMessageDone implements Action<void> {
  type = ActionTypes.CHANGE_MESSAGE_DONE
}

export const changeMessageDone = (): Action<void> =>
    ({type: ActionTypes.CHANGE_MESSAGE_DONE});

export type ChangeMessageActions = ChangeMessageStart | ChangeMessageDone;
