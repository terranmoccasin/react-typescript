export interface Action<P> {
  readonly type: string,
  readonly payload: P,
  readonly error?: boolean,
  readonly meta?: Object
}

interface ActionCreator<P> {
  readonly type: string
  (payload: P): Action<P>
}

export const actionCreator = <P>(type: string): ActionCreator<P> =>
  Object.assign((payload: P):any => ({type, payload}), {type})

export const isType = <P>(action: Action<any>, actionCreator: ActionCreator<P>):
  action is Action<P> => action.type === actionCreator.type