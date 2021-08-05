import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MealsList from '../containers/MealsList';
import MealDetail from './MealDetail';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MealsList} />
          <Route path="/meals/:id" component={MealDetail} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default  App;
