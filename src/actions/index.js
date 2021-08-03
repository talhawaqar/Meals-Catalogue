import { 
  FETCH_MEALS,
  FETCH_MEAL,
  FETCH_CATEGORIES,
  BASE_URL
} from './types';
import axios from 'axios';

export const fetchMeals = (category) => async (dispatch) => {
  const response = await axios.get( BASE_URL+'/filter.php', {
    params: {c: category }
  });
  dispatch({
    type: FETCH_MEALS,
    payload: response.data.meals
  });
}

export const fetchMeal = (mealId) => async (dispatch) => {
  const response = await axios.get( BASE_URL+'lookup.php/', 
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
  const response = await axios.get( BASE_URL+'categories.php');
  dispatch({
    type: FETCH_CATEGORIES,
    payload: response.data.categories
  });
}

