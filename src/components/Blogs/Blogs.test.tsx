import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Blogs from './Blogs';
import IBlogPost from '../../interfaces/IBlogPost';
import { server } from '../../server'
import { HttpResponse, http } from 'msw';


beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


describe('renders blogs', () => {


  test("with ok data", async () => {

    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts', () => {
        return HttpResponse.json(
          [

            {
              id: "123",
              title: "title",
              body: "body"
            }
          ]
        )
      }),
    )

    render(<Blogs />);
    await waitFor(async () => {
      expect(await screen.getByTestId("id")).toHaveTextContent("01")
    })

  })


  test("with loading", async () => {

    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts', async () => {
        await sleep(1000);
        return HttpResponse.json(
          [

            {
              id: "123",
              title: "title",
              body: "body"
            }
          ]
        )
      }),
    )

    render(<Blogs />);
    expect(screen.getByTestId("loading")).toBeInTheDocument()
    await sleep(1000)
    await waitFor(async () => {
      expect(await screen.getByTestId("id")).toHaveTextContent("01")
    })

  })


  test("with error", async () => {

    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts', async () => {
        return HttpResponse.html("", { status: 400 })
      }),
    )

    await act(async () => {
      render(<Blogs />);
    })


    await waitFor(async () => {
      expect(await screen.getByTestId("error")).toHaveTextContent("HTTP error! status: 400")
    })

  })
});
