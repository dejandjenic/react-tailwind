import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BlogPost from './BlogPost';
import IBlogPost from '../../interfaces/IBlogPost';

test('renders blog post',async () => {

  const firstInitialState = false;
  const secondInitialState = true;

  jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(() => [firstInitialState, () => null])
  .mockImplementationOnce(() => [secondInitialState, () => null])
  .mockImplementation((x) => [x, () => null]); // ensures that the rest are unaffected


  const blog: IBlogPost = {
    id: 11,
    body: "body",
    title: "title"
  }
  render(<BlogPost index={1} blog={blog} />);
  expect(screen.getByTestId("id")).toHaveTextContent("02")

  expect(screen.getByTestId("title")).toHaveTextContent("title")

  await waitFor(() => expect(() => screen.getByTestId('body')).toThrow());

  render(<BlogPost index={1} blog={blog} />);
  expect(screen.getByTestId("body")).toHaveTextContent("body")
});
