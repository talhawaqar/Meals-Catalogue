import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions';
import Hero from '../components/Hero';
import Meal from '../components/Meal';

class MealsList extends React.Component {

  componentDidMount() {
    this.props.fetchMeals('American', 'Beef');
  }

  renderList() {
    return this.props.meals.map( meal => {
      return(
        <Meal Key={meal.idMeal} mealId= {meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} category='Sea Food'/>
      );
    });
  }

  render(){
    if(!this.props.meals){
      <div>Loading....</div>
    }
    return (
      <>
        <Hero />
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    meals: Object.values(state.meals)
  }
}

export default connect(mapStateToProps, { fetchMeals })(MealsList);
