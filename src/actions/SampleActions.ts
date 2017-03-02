import {SAMPLE_ACTION} from '../constants/ActionTypes';

interface Action<P> {
  type: string,
  payload: P,
  error?: boolean,
  meta?: Object
}

export const changeMessage = (message: string): Action<string> => {
  return {
    type: SAMPLE_ACTION,
    payload: message
  };
};
