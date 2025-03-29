import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'


const handlers: never[] = []

export const server = setupServer(...handlers)