import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals, fetchCategories } from '../actions';
import Hero from '../components/Hero';
import Meal from '../components/Meal';
import Filter from '../components/Filter';

class MealsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { category: 'Beef' };
  }

  onCategoryChange = (category) => {
    this.props.fetchMeals(category);
    this.setState({ category: category });
  }

  componentDidMount() {
    this.props.fetchMeals(this.state.category);
    this.props.fetchCategories();
  }

  renderList() {
    return this.props.meals.map( meal => {
      return(
        <Meal Key={meal.idMeal} mealId= {meal.idMeal} title={meal.strMeal} imageUrl={meal.strMealThumb} category={ this.state.category }/>
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
          <Filter 
            categories={ this.props.categories }
            onCategoryChange={ this.onCategoryChange }
          />
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
  }
}

export default connect(mapStateToProps, { fetchMeals, fetchCategories })(MealsList);
