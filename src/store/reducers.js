import ActionType from "./ActionType";

export const color = (state = {}, action) => {
  switch (action.type) {
    case ActionType.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0,
      };

    case ActionType.RATE_COLOR:
      return state.id !== action.id
        ? state
        : {
            ...state,
            rating: action.rating,
          };

    default:
      return state;
  }
};

export const colors = (state = [], action) => {
  switch (action.type) {
    case ActionType.ADD_COLOR:
      return [...state, color({}, action)];

    case ActionType.RATE_COLOR:
      return state.map((c) => color(c, action));

    case ActionType.REMOVE_COLOR:
      return state.filter((color) => color.id !== action.id);

    default:
      return state;
  }
};

// const currentColors = [
//   {
//     id: "9813e2p4-3abl-2e44-95p4-8001l8yf3036",
//     title: "Berry Blue",
//     color: "#000066",
//     rating: 0,
//     timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
//   },
// ];
// const action = {
//   type: ActionType.ADD_COLOR,
//   id: "5523e7p8-3ab2-1e35-95p4-8001l8yf3036",
//   title: "Party Pink",
//   color: "#F142FF",
//   timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
// };

// console.log("colors", colors(currentColors, action));

export const sort = (state = "SORTED_BY_DATE", action) => {
  switch (action.type) {
    case ActionType.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};

// const state = "SORTED_BY_DATE";

// const action = {
//   type: ActionType.SORT_COLORS,
//   sortBy: "SORTED_BY_TITLE",
// };

// console.log("state", sort(state, action));
