import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Section', () => {
  test('renders Hero component', () => {
    render(<Hero />);
    expect(screen.getByText('The meals you love')).toBeInTheDocument();
    expect(screen.getByText('Find meals that best suits your taste buds')).toBeInTheDocument();
  });
});
