// AboutUs.test.jsx
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('renders the AboutUs component', () => {
    render(<AboutUs />);
    
    const descriptionElement = screen.getByText(/Welcome to our platform dedicated to the world of films/i);
    const criticTitleElement = screen.getByText('Unleash Your Inner Critic');
    const criticDescriptionElement = screen.getByText(/Whether you're a casual moviegoer or an aspiring film critic/i);

    expect(descriptionElement).toBeInTheDocument();
    expect(criticTitleElement).toBeInTheDocument();
    expect(criticDescriptionElement).toBeInTheDocument();
  });
});
