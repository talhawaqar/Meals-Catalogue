import React from 'react';
import './filter.css';

const Filter = (props) => {

  const renderCategoriesOptions = () => {
    return props.categories.map((category) => {
      return (
        <option key={category.idCategory} value={category.strCategory} >
          { category.strCategory }
        </option>
      );
    });
  }

  const renderAreaOptions = () => {
    return props.areas.map((area) => {
      return (
        <option Key={ area.strArea }  value={ area.strArea } >
          { area.strArea }
        </option>
      );
    });
  }

  return (
    <div className="row pt-5 pb-3">
      <div className="col-12 col-md-6 filter">
        <span> Select categories </span>
        <select>
          { renderCategoriesOptions() }
        </select>
      </div>
      <div className="col-12 filter col-md-6">
        <span> Select Area </span>
        <select>
          { renderAreaOptions() }
        </select>
      </div>
    </div> 
  );
}

export default Filter;
