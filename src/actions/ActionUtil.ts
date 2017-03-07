export interface Action<P> {
  type: any
  payload?: P
}

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  // this actually checks whether your action type
  // name is unique!
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

export const ActionTypes = {
  CHANGE_MESSAGE_START: type<'CHANGE_MESSAGE_START'>('CHANGE_MESSAGE_START'),
  CHANGE_MESSAGE_DONE: type<'CHANGE_MESSAGE_DONE'>('CHANGE_MESSAGE_DONE')
}
