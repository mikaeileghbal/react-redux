import { createStore, combineReducers } from "redux";
import ActionType from "./ActionType";
import { colors, sort } from "./reducers";
import { addColor } from "./ActionCreators";

const initialState = {
  colors: [
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)",
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
      title: "Crazy Green",
      color: "#00FF00",
      rating: 0,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)",
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
    },
  ],
  sort: "SORTED_BY_TITLE",
};

const store = createStore(
  combineReducers({ colors, sort }),
  localStorage["redux-store"]
    ? JSON.parse(localStorage["redux-store"])
    : initialState
);

function logStoreState() {
  console.log("LOG: ", store.getState());
}

const unsubscribeLogStoreState = store.subscribe(logStoreState);

store.subscribe(() => {
  localStorage["resux-store"] = JSON.stringify(store.getState());
});

// run the function returned from subscribe to unsubscribe
//unsubscribeLogStoreState();

console.log("Store", store.getState());
console.log(store.getState().colors.length);
console.log(store.getState().sort);

const action = {
  type: ActionType.ADD_COLOR,
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  title: "Party Pink",
  color: "#F142FF",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
};

store.dispatch(action);

console.log(store.getState());

store.dispatch(addColor("Clinic Pink", "#F142FF"));
