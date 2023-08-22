import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

jest.mock('./AboutUs', () => {
  return {
    __esModule: true,
    default: jest.requireActual('./AboutUs').default,
  };
});

test('renders the AboutUs component', () => {
  render(<AboutUs />);
  
  const headingElement = screen.getByText('About Us');
  const paragraphElement = screen.getByText('We are a team of passionate individuals...');

  // Assertions
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
