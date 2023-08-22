import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('renders the sidebar with correct links and categories', () => {
    render(<Sidebar />);

    expect(screen.getByText('Media')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Netflix' })).toHaveAttribute(
      'href',
      'https://www.netflix.com/ca/'
    );
    expect(screen.getByRole('link', { name: 'Disney +' })).toHaveAttribute(
      'href',
      'https://www.disneyplus.com/en-ca'
    );
    expect(screen.getByRole('link', { name: 'Apple TV +' })).toHaveAttribute(
      'href',
      'https://www.apple.com/ca/apple-tv-plus/'
    );
    expect(screen.getByRole('link', { name: 'Amazon Prime' })).toHaveAttribute(
      'href',
      'https://www.primevideo.com/'
    );

    const categories = ['Action', 'Comedy', 'Drama', 'Sci-fi', 'Thriller', 'Drama'];
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });
});
