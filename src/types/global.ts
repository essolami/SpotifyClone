import { RouteComponentProps } from "react-router-dom";
import type { Reducers } from "../redux/reducers";

declare global {
  export interface ICommonProps<
    P extends { [K in keyof P]?: string | undefined } = AnyObject
  > extends RouteComponentProps<P>,
      AnyObject {
    [key: string]: any;
  }

  export interface IAnyProps {
    [key: string]: any;
  }

  type AnyObject<T = any> = Record<string, T>;

  // State
  export type ReduxState = Reducers; // eslint-disable-line no-undef

  export type Action = { type: String; data?: any; err?: any };

  export type Dispatch = (
    action: Action | ThunkAction | PromiseAction | Array<Action>
  ) => any;

  export type GetState = () => ReduxState;

  export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

  export type PromiseAction = Promise<Action>;
}
