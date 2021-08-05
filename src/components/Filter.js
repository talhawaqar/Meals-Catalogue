import React from 'react';
import PropTypes from 'prop-types';
import './filter.css';

const Filter = (props) => {
  const onSelectCategoryChange = (e) => {
    props.onCategoryChange(e.target.value);
  };

  const renderCategoriesOptions = () => props.categories.map((category) => (
    <option key={category.idCategory} value={category.strCategory}>
      { category.strCategory }
    </option>
  ));

  return (
    <div className="row pt-5 pb-3">
      <div className="col-12 filter">
        <span> Select categories </span>
        <select onChange={onSelectCategoryChange}>
          { renderCategoriesOptions() }
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onCategoryChange: PropTypes.func,
};

Filter.defaultProps = {
  categories: [],
  onCategoryChange: () => {},
};

export default Filter;
