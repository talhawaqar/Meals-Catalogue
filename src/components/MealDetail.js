import React from 'react';
import { connect } from 'react-redux';
import { fetchMeal } from '../actions';
import './MealDetail.css';

class MealDetail extends React.Component {
  
  componentDidMount(){
    this.props.fetchMeal(this.props.match.params.id);
  }

  renderIngrediants = () => {
    const meal = this.props.meal;
    let ingrediants = [<span key={meal.strIngredient1}> 1. { meal.strIngredient1 } </span>, <span key={ meal.strMeasure1 }> { meal.strMeasure1 } </span>, <br key='1'/>];
    for( let i=2; i<=20; i++ ) {
      if(meal[`strIngredient${i}`] === '' || meal[`strIngredient${i}`] === null )
      {
        break;
      }
      ingrediants.push(<span key={meal[`strIngredient${i}`]}> {`${i}`}. { meal[`strIngredient${i}`] } </span>);
      ingrediants.push(<span key={meal[`strMeasure${i}`]+i}> { meal[`strMeasure${i}`] } </span>);
      ingrediants.push(<br key={i} />);  
    }
    return ingrediants;
  }

  render() {
    if(!this.props.meal) {
      return <div>Loading....</div>;
    }

    const meal = this.props.meal;
    return (
      <>
        <div className='container main'>
          <div key='hero' style = {{ backgroundImage: `url(${meal.strMealThumb})` }}className='hero w-100'>
          </div> 
          <h1 className='mt-3' > { meal.strMeal } </h1>
          <div key='details' className='row mt-4'>
            <div className='col-12'>
              <span className='heading' >Category:</span> <span className='detail'> { meal.strCategory } </span>
              <br/>
              <span className='heading' >Ingredients:</span>
              <br/>
              { this.renderIngrediants() }
              <span className='heading' >Cooking Instructions:</span>
              <br/>
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

const mapStateToProps = (state, ownProps) => {
  return {
    meal: state.meals[ownProps.match.params.id]
  };
}

export default connect( mapStateToProps, { fetchMeal } )(MealDetail);
