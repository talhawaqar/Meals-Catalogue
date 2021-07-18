import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";

export default combineReducers({
  meals: mealsReducer
});
