import React from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions';
import Hero from '../components/Hero';

class MealsList extends React.Component {

  componentDidMount() {
    this.props.fetchMeals('American', 'Beef');
  }

  render(){
    return (
      <Hero />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.meals
  }
}

export default connect(mapStateToProps, { fetchMeals })(MealsList);
