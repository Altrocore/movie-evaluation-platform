import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeColorWrapper } from './ThemeContext'; // Import the ThemeColorWrapper separately for testing
import { PaginationProvider } from './PaginationContext'; // Import the PaginationProvider separately for testing
import App from './App';

// Mock the FilmContext and ThemeColorContext
jest.mock('./FilmContext', () => ({
  useContext: jest.fn(),
}));

jest.mock('./ThemeContext', () => ({
  ThemeColorWrapper: ({ children }) => <div>{children}</div>,
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    // Mock the values returned by useContext
    const mockContext = {
      isLoading: false,
      chosenFilm: null,
    };
    jest.spyOn(React, 'useContext').mockReturnValue(mockContext);

    // Render the component within the necessary providers
    const { getByText } = render(
      <Router>
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </Router>
    );

    // You can add more assertions here based on your component's behavior
    // For example, if you have a loading state, you can test if the loading message is shown
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
