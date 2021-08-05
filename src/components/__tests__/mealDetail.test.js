import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducer from '../../reducers';
import MealDetail from '../MealDetail';

it('renders correctly when store is provided', () => {
  const mealId = '52772';
  const match = { params: { id: '52772' } };
  const store = createStore(reducer, applyMiddleware(reduxThunk));
  const mealDetail = renderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/meals/${mealId}`]}>
        <MealDetail match={match} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(mealDetail).toMatchSnapshot();
});
