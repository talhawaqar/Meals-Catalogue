import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import categoryReducer from './categoryReducer';
import areaReducer from './areaReducer';

export default combineReducers({
  meals: mealsReducer,
  categories: categoryReducer,
  areas: areaReducer,
});
