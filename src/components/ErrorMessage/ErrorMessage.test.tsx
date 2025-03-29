import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders error text', () => {
  render(<ErrorMessage error="this is error" />);
  const element = screen.getByText(/this is error/i);
  expect(element).toBeInTheDocument();
});
