'use strict';

const Path = require('path');
const api = require(Path.join(__dirname, '/api/v1/api'));

module.exports = [
  // Serve static files
  {
    method: 'GET',
    path: '/assets/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '/assets')
      }
    }
  },

  // Actual routes
  {
    method: 'GET',
    path: '/',
    handler: {
      file: {
        path: Path.join(__dirname, '/index.html')
      }
    }
  },

  // API routes
  {
    method: 'POST',
    path: '/api/v1/message',
    handler: api.handlePost
  }
];