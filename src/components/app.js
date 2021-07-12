import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MealsList from '../containers/MealsList';
import MealDetail from './MealDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MealsList} />
          <Route path="/meals/:id" component={MealDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default  App;
