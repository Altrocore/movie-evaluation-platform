import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Feedback from './Feedback';

const mockAddFeedback = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({ addFeedback: mockAddFeedback })
}));

describe('Feedback Component', () => {
  const mockFilm = {
    _id: '123',
    feedback: ['Review 1', 'Review 2'],
    rating: 4
  };

  it('renders feedback list when feedback is available', () => {
    render(<Feedback film={mockFilm} />);

    const feedbackElements = screen.getAllByText(/Review \d/);
    expect(feedbackElements).toHaveLength(2);
  });

  it('renders "No feedback available." when feedback is not available', () => {
    render(<Feedback film={{ ...mockFilm, feedback: [] }} />);

    const noFeedbackMessage = screen.getByText('No feedback available.');
    expect(noFeedbackMessage).toBeInTheDocument();
  });

  it('opens textarea and adds a review when "Add a Review" is clicked', () => {
    render(<Feedback film={mockFilm} />);

    const addButton = screen.getByText('Add a Review');
    fireEvent.click(addButton);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New review text' } });

    const addReviewButton = screen.getByText('Add a Review');
    fireEvent.click(addReviewButton);

    expect(mockAddFeedback).toHaveBeenCalledWith('123', 'New review text', 4);
  });

  it('cancels adding a review when "Cancel" is clicked', () => {
    render(<Feedback film={mockFilm} />);

    const addButton = screen.getByText('Add a Review');
    fireEvent.click(addButton);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    const textarea = screen.queryByRole('textbox');
    expect(textarea).not.toBeInTheDocument();
  });
});
