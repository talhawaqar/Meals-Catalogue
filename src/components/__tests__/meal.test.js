import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Meal from '../Meal';

describe('Meal component', () => {
  test('renders meal component', () => {
    const meal = {
      mealId: '1',
      title: 'Biryani',
      imageUrl: '.jpg',
      category: 'Beef',
    };
    const {
      mealId, title, imageUrl, category,
    } = meal;

    render(
      <BrowserRouter>
        <Meal
          mealId={mealId}
          title={title}
          imageUrl={imageUrl}
          category={category}
        />
      </BrowserRouter>,
    );
    expect(screen.getByText('Biryani')).toBeInTheDocument();
    expect(screen.getByText('Beef')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });
});
