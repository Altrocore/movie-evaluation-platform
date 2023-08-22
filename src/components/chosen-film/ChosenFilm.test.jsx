
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChosenFilm from './ChosenFilm'; 
import FilmContext from '../../FilmContext';

const mockFilm = {
  id: 1,
  title: 'Test Film',
  year: '2023',
  rating: '4.5',
  director: ['Director 1', 'Director 2'],
  genre: ['Action', 'Adventure'],
  writers: ['Writer 1', 'Writer 2'],
  image: [['poster', 'poster-url'], ['image2', 'image2-url']],
  description: 'Test film description',
};

describe('ChosenFilm', () => {
    it('renders the ChosenFilm component', () => {
        render(
            <FilmContext>
                <ChosenFilm film={mockFilm} />
            </FilmContext>
          );
        
          const titleElement = screen.getByText(/Test Film \(2023\)/i);
          const ratingElement = screen.getByText(/Rate:.*4.5/i);
          const creatorsElement = screen.getByText(/Creators:.*Director 1, Director 2/i);
        
          expect(titleElement).toBeInTheDocument();
          expect(ratingElement).toBeInTheDocument();
          expect(creatorsElement).toBeInTheDocument();
    });
});
