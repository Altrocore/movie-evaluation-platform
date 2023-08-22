import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs Component', () => {
  it('renders the component', () => {
    const { getByText } = render(<AboutUs />);
    
    const headingElement = getByText('About Us');
    const paragraphElement = getByText('We are a team of passionate individuals...');
    
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
