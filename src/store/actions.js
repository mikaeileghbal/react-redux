import ActionType from "./ActionType";
import { v4 } from "uuid";

export const addColor = (title, color) => ({
  type: ActionType.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
});

export const removeColor = (id) => ({
  type: ActionType.REMOVE_COLOR,
  id,
});

export const rateColor = (id, rating) => ({
  type: ActionType.RATE_COLOR,
  id,
  rating,
});

export const sortColors = (sortedBy) =>
  sortedBy === "rating"
    ? {
        type: ActionType.SORT_COLORS,
        sortedBy: "SORTED_BY_RATING",
      }
    : sortedBy === "title"
    ? {
        type: ActionType.SORT_COLORS,
        sortedBy: "SORTED_BY_TITLE",
      }
    : {
        type: ActionType.SORT_COLORS,
        sortedBy: "SORTED_BY_DATE",
      };
