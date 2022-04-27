import { createStore, combineReducers, applyMiddleware } from "redux";
import { colors, sort } from "./reducers";
import stateDate from "./initialState.json";

const store = createStore(
  combineReducers({ colors, sort }),
  localStorage["redux-store"] ? localStorage["redux-store"] : stateDate
);

store.subscribe(() => {
  console.log(store.getState());
});

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

export default store;
