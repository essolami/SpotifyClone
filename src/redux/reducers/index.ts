import { combineReducers } from "redux";
import categories from "./categories";

const reducers = {
  categories,
};

export type Reducers = typeof reducers;

export default combineReducers({ ...reducers });
