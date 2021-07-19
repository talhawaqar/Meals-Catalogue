import { 
  FETCH_MEALS,
  FETCH_MEAL,
  FETCH_CATEGORIES,
  FETCH_AREAS
} from './types';
import meals from '../apis/meals';


export const fetchMeals = (area, category) => async (dispatch) => {
  const response = await meals.get(`/filter.php`, {
    params: {a: area, c: category}
  });
  dispatch({
    type: FETCH_MEALS,
    payload: response.data.meals
  });
}

export const fetchMeal = (mealId) => async (dispatch) => {
  const response = await meals.get('/lookup.php/', { i: mealId });
  dispatch({
    type: FETCH_MEAL,
    payload: response.data.meals
  });
}

export const fetchAreas = () => async (dispatch) => {
  const response = await meals.get('list.php', {a: 'list'});
  dispatch({
    type: FETCH_AREAS,
    payload: response.data
  });
}

export const fetchCategories = () => async (dispatch) => {
  const response = await meals.get('list.php', {c: 'list'});
  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data
  });
}
