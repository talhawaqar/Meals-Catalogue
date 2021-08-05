import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import categoryReducer from './categoryReducer';

const reducer = combineReducers({
  meals: mealsReducer,
  categories: categoryReducer,
});

export default reducer;
