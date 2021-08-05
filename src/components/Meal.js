import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Meal = (props) => {
  const {
    mealId, title, imageUrl, category,
  } = props;
  return (
    <div className="col-12 col-md-4 mt-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {' '}
            { title }
            {' '}
          </h5>
          <p className="card-text">{ category }</p>
          <Link to={`/meals/${mealId}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  mealId: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
};

Meal.defaultProps = {
  mealId: '',
  title: '',
  imageUrl: '',
  category: '',
};

export default Meal;
