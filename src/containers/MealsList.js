import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMeals, fetchCategories } from '../actions';
import Hero from '../components/Hero';
import Meal from '../components/Meal';
import Filter from '../components/Filter';

class MealsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: 'Beef' };
  }

  componentDidMount() {
    const { category } = this.state;
    const { fetchMeals, fetchCategories } = this.props;
    fetchMeals(category);
    fetchCategories();
  }

  onCategoryChange = (category) => {
    const { fetchMeals } = this.props;
    fetchMeals(category);
    this.setState({ category });
  }

  renderList() {
    const { meals } = this.props;
    const { category } = this.state;
    return meals.map((meal) => (
      <Meal
        Key={meal.idMeal}
        mealId={meal.idMeal}
        title={meal.strMeal}
        imageUrl={meal.strMealThumb}
        category={category}
      />
    ));
  }

  render() {
    const { meals, categories } = this.props;
    if (!meals) {
      <div>Loading....</div>;
    }
    return (
      <>
        <Hero />
        <div className="container">
          <Filter
            categories={categories}
            onCategoryChange={this.onCategoryChange}
          />
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  meals: Object.values(state.meals),
  categories: state.categories,
});

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  fetchMeals: PropTypes.func,
  fetchCategories: PropTypes.func,
};

MealsList.defaultProps = {
  meals: [],
  categories: [],
  fetchMeals: () => {},
  fetchCategories: () => {},
};

export default connect(mapStateToProps, { fetchMeals, fetchCategories })(MealsList);
