'use strict';

const Path = require('path');
const api = require(Path.join(__dirname, '/api/v1/api'));

module.exports = [
  // Serve static files
  {
    method: 'GET',
    path: '/assets/js/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '/assets/js')
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/css/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '/assets/css')
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/img/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '/assets/img')
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
    path: '/api/v1/test',
    handler: api.handlePost
  },
  {
    method: 'POST',
    path: '/api/v1/message',
    handler: (request, reply) => {
      console.log(request);
    }
  }
];