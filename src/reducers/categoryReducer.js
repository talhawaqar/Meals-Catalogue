import {
  FETCH_CATEGORIES,
} from '../actions/types';

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
