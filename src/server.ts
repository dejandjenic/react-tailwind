import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'


const handlers = []

export const server = setupServer(...handlers)