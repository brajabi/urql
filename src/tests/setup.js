'use strict';

global.AbortController = undefined;
global.fetch = jest.fn();

process.on('unhandledRejection', error => {
  throw error;
});
