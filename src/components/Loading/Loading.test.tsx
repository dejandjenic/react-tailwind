import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('renders loading text', () => {
  render(<Loading />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
