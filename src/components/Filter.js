import React from 'react';
import './filter.css';

const Filter = (props) => {

  const onSelectCategoryChange = (e) => {
    props.onCategoryChange(e.target.value);
  }

  const renderCategoriesOptions = () => {
    return props.categories.map((category) => {
      return (
        <option key={category.idCategory} value={category.strCategory} >
          { category.strCategory }
        </option>
      );
    });
  }

  return (
    <div className="row pt-5 pb-3">
      <div className="col-12 filter">
        <span> Select categories </span>
        <select onChange={ onSelectCategoryChange }>
          { renderCategoriesOptions() }
        </select>
      </div>
    </div> 
  );
}

export default Filter;
