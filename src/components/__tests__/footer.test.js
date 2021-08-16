import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Made by Muhammad Talha Waqar')).toBeInTheDocument();
  });
});
