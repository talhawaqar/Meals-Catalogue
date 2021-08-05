import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

describe('Footer', () => {
  test('renders Footer component', () => {
    const categories = [ {
      "idCategory": "1",
      "strCategory": "Beef",
    },
    {
      "idCategory": "2",
      "strCategory": "Chicken",
    },];

    const onCategoryChange = (e) => {
      return e.target.value;
    }
    
    render(<Filter categories={categories }
      onCategoryChange={ onCategoryChange }/>);
    expect(screen.getByText('Beef')).toBeInTheDocument();
    fireEvent.click(screen.getByText("Chicken"));
  });
});
