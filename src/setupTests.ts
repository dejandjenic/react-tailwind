// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import { TransformStream } from 'node:stream/web';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.TransformStream = TransformStream;

import {
    BroadcastChannel
  } from 'worker_threads'
  
  Reflect.set(globalThis, 'BroadcastChannel', BroadcastChannel)

