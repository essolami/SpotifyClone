import type { Reducers } from "../redux/reducers";

// State
export type ReduxState = Reducers; // eslint-disable-line no-undef

export type Action = { type: String; data?: any; err?: any };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;

export type GetState = () => ReduxState;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type PromiseAction = Promise<Action>;
