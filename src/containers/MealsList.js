import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions';

class MealsList extends React.Component {

  componentDidMount() {
    this.props.fetchMeals('American', 'Beef');
  }

  render(){
    return <h1>I am from meal list</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.meals
  }
}

export default connect(mapStateToProps, { fetchMeals })(MealsList);
