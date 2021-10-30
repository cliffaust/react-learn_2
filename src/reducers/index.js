import loggedReducer from "./isLogged";
import counterReducer from "./counter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  loggedReducer,
  counterReducer,
});

export default allReducers;
