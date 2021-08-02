import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import categoryReducer from './categoryReducer';

export default combineReducers({
  meals: mealsReducer,
  categories: categoryReducer,
});
