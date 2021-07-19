import _ from 'lodash';
import {
  FETCH_MEALS,
  FETCH_MEAL
} from '../actions/types';

export default (state = [], action ) => {
  switch(action.type) {
    case FETCH_MEALS:
      return action.payload;
    case FETCH_MEAL:
      return { ...state, [action.payload.idMeal]: action.payload };
    default:
      return state;
  };
};
