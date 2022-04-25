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

const action = {
  type: "ADD_COLOR",
  id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
  color: "#0000FF",
  title: "Big Blue",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
};

console.log(color({}, action));
