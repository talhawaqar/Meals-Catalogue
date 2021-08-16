import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMeal } from '../actions';
import './MealDetail.css';

class MealDetail extends React.Component {
  componentDidMount() {
    const { match, fetchMeal } = this.props;
    fetchMeal(match.params.id);
  }

  renderIngrediants = () => {
    const { meal } = this.props;
    const ingrediants = [
      <span key={meal.strIngredient1}>
        {' '}
        1.
        {' '}
        { meal.strIngredient1 }
      </span>,
      <span key={meal.strMeasure1}>
        {' '}
        { meal.strMeasure1 }
        {' '}
      </span>,
      <br key="1" />,
    ];
    for (let i = 2; i <= 20; i += 1) {
      if (meal[`strIngredient${i}`] === '' || meal[`strIngredient${i}`] === null) {
        break;
      }
      ingrediants.push(
        <span key={meal[`strIngredient${i}`]}>
          {' '}
          {`${i}`}
          .
          {' '}
          { meal[`strIngredient${i}`] }
          {' '}
        </span>,
      );
      ingrediants.push(
        <span key={meal[`strMeasure${i}`] + i}>
          {' '}
          { meal[`strMeasure${i}`] }
          {' '}
        </span>,
      );
      ingrediants.push(<br key={i} />);
    }
    return ingrediants;
  }

  render() {
    const { meal } = this.props;

    if (!meal) {
      return <div>Loading....</div>;
    }

    return (
      <>
        <div className="container main">
          <div key="hero" style={{ backgroundImage: `url(${meal.strMealThumb})` }} className="hero w-100" />
          <h1 className="mt-3">
            {' '}
            { meal.strMeal }
            {' '}
          </h1>
          <div key="details" className="row mt-4">
            <div className="col-12">
              <span className="heading">Category:</span>
              {' '}
              <span className="detail">
                {' '}
                { meal.strCategory }
                {' '}
              </span>
              <br />
              <span className="heading">Ingredients:</span>
              <br />
              { this.renderIngrediants() }
              <span className="heading">Cooking Instructions:</span>
              <br />
              <p>
                { meal.strInstructions }
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  meal: state.meals[ownProps.match.params.id],
});

MealDetail.propTypes = {
  meal: PropTypes.objectOf(PropTypes.object),
  fetchMeal: PropTypes.func,
  match: PropTypes.objectOf(PropTypes.object),
};

MealDetail.defaultProps = {
  meal: {},
  fetchMeal: () => {},
  match: {},
};

export default connect(mapStateToProps, { fetchMeal })(MealDetail);
