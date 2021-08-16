import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducer from '../../reducers';
import MealList from '../MealsList';

it('renders correctly when store is provided', () => {
  const store = createStore(reducer, applyMiddleware(reduxThunk));
  const mealList = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <MealList />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(mealList).toMatchSnapshot();
});
