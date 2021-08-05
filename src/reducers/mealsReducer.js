import _ from 'lodash';
import {
  FETCH_MEALS,
  FETCH_MEAL,
} from '../actions/types';

const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return { ..._.mapKeys(action.payload, 'idMeal') };
    case FETCH_MEAL:
      return { ...state, [action.payload[0].idMeal]: action.payload[0] };
    default:
      return state;
  }
};

export default mealsReducer;
