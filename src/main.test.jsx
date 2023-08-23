import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { FilmContextWrapper } from './FilmContext'; 

test('renders without errors', () => {
  render(
    <FilmContextWrapper>
      <App />
    </FilmContextWrapper>
  );
});
