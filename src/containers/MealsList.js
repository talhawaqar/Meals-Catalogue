import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals, fetchCategories, fetchAreas } from '../actions';
import Hero from '../components/Hero';
import Meal from '../components/Meal';
import Filter from '../components/Filter';

class MealsList extends React.Component {

  componentDidMount() {
    this.props.fetchMeals('American', 'Beef');
    this.props.fetchCategories();
    this.props.fetchAreas();
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
          <Filter categories={ this.props.categories } areas= { this.props.areas } />
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
    meals: Object.values(state.meals),
    categories: state.categories,
    areas: state.areas,
  }
}

export default connect(mapStateToProps, { fetchMeals, fetchCategories, fetchAreas })(MealsList);
