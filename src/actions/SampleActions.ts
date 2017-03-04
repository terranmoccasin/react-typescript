export interface ChangeMessageAction {
  type: 'App/CHANGE_MESSAGE',
  payload: string
}

export function changeMessage(message: string): ChangeMessageAction {
  return {type: 'App/CHANGE_MESSAGE', payload: message};
}

export type ChangeMessageAsyncType = 'App/CHANGE_MESSAGE_ASYNC';
export interface ChangeMessageAsyncAction {
  type: ChangeMessageAsyncType
}

export function changeMessageAsync(): ChangeMessageAsyncAction {
  return {type: 'App/CHANGE_MESSAGE_ASYNC'};
}
