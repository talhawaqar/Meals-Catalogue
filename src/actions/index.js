import { 
  FETCH_MEALS,
  FETCH_MEAL,
  FETCH_CATEGORIES,
} from './types';
import meals from '../apis/meals';

export const fetchMeals = (category) => async (dispatch) => {
  const response = await meals.get('/filter.php', {
    params: {c: category }
  });
  dispatch({
    type: FETCH_MEALS,
    payload: response.data.meals
  });
}

export const fetchMeal = (mealId) => async (dispatch) => {
  const response = await meals.get('/lookup.php/', 
    { 
      params: {i: mealId}
    }
  );
  dispatch({
    type: FETCH_MEAL,
    payload: response.data.meals
  });
}

export const fetchCategories = () => async (dispatch) => {
  const response = await meals.get('categories.php');
  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data.categories
  });
}
