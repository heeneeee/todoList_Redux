import { createStore } from "redux";
import todos from "../modules/todos";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
